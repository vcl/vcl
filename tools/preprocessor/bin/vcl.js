#!/usr/bin/env node

'use strict';

var debug = require('debug')('vcl-preprocessor:cli');
var vcl = require('../index');
var fs = require('fs');
var path = require('path');
var info = require('../package.json');
var chalk = require('chalk');

var stdin = process.stdin;

debug('cli time');


var compile = function compile(css, file, opts){

  let options = opts || {};
  if (file !== undefined) {
    options.source = file;
  }

  return new Promise((resolve, reject) => {
      let compiler = vcl(css, options)
      .then(function (result) {
         resolve(result.css);
      });
  });

};

// Unix piping
var unixPipe = function(){
  var buffers = [];

  stdin.on('data', function(data){
    buffers.push(new Buffer(data));
  });

  stdin.on('end', function(){
    var cssRaw = new Buffer.concat(buffers);
    var css = cssRaw.toString();

    var result = compile(css);
    if (stdin.isTTY === true) console.log(chalk.bold('\nResult:'));
    process.stdout.write(result);
  });
};

// Not piping
if (stdin.isTTY === true || process.env.VCL_NO_PIPE) {
  var mkdirp = require('mkdirp');
  var yargs = require('yargs')
    .version(info.version, 'version')
    // .wrap(Math.min(120, windowWidth))
    .help('help')
    .alias('version', 'v')
    .alias('help', 'h')
    .alias('import-root', 'i')
    .alias('hoverSelectorPrefix', 'p')
    .usage('Usage: vcl-preprocessor <input> [output]')
    .describe('watch', 'watches the input file for changes')
    .describe('import-root', 'base directory for file based imports')
    .describe('direct-input', 'waits for input from stdin')
    .describe('include-dev', 'include dev dependencies of module')
    .default('include-dev', true)
    .boolean('include-dev')
    .describe('hoverSelectorPrefix', 'specify a hover selector prefix')
    .alias('watch', 'w')
    .count('verbose')
    .alias('V', 'verbose');

  // Examples
  yargs
    .example('vcl-preprocessor index.styl dist/compiled.css',
      'Compile index.styl and output to dist/compiled.css')
    .example('cat index.styl | vcl-preprocessor > compiled.css',
      'Compile index.styl and pipe output to compiled.css')
    .example('vcl-preprocessor ./package.json > compiled.css',
      'Fetch the package dependencies and compile everything to compiled.css');

  var argv = yargs.argv;

  var V_LEVEL = argv.verbose;

  if (V_LEVEL === 0) {
    // catch exceptions and show only error message
    // if not running verbosely
    process.on('uncaughtException', function(err){
      console.log(chalk.red(err.toString()));
      console.log('run with --verbose to see stacktrace');
      process.exit(1);
    });
  }

  debug('command line options:');
  debug(argv);

  if (argv.directInput) {
    console.log('Waiting for direct input. End with Ctrl+D');
    console.log('=========================================');
    return unixPipe();
  } else if (argv._[0] === undefined) {
    return yargs.showHelp();
  }

  var fName = argv._[0];
  if (path.extname(fName) === '') fName += '/package.json';
  var input = path.resolve(fName);

  debug('reading file');

  fs.readFile(input, {encoding: 'utf8'}, function rf(err, css) {

    if (!err){
      // could read file, compile
      debug('file successfully read');
      if (path.extname(input) === '.json') {
        // probably a package.json - compile package
        // console.log('compileCommandLine(input, true) L139');
        compileCommandLine(input, true);
      } else {
        // console.log('compileCommandLine(css): L141');
        compileCommandLine(css);
      }
    } else {
      // file not found, try to find module with that name
      var npmModule = null;
      var npmModulePath = null;
      var npmModuleBaseDir = null;
      try {
        // get module information
        npmModulePath = require.resolve(fName, { basedir: process.cwd()});
        npmModuleBaseDir = path.dirname(npmModulePath);
        npmModule = require(fName, { basedir: process.cwd()});
      } catch (e) {
        throw new Error('No file or npm module named ' + fName + ' found');
      }

      // check if package.json has a style field
      if (npmModule.style === undefined) {
        var m = 'Module ' + fName + ' has no style field in its package.json';
        throw new Error(m);
      } else {
        // read npm module style and compile it
        debug('compiling package');
        compileCommandLine(npmModulePath, true);
      }
    }

  });

  var compileCommandLine = function compileCommandLine(css, isPackage) {

    // compile css
    var opts = {};

    if (argv.importRoot) {
      var importRoot = path.resolve(argv.importRoot);
      console.log('importing from: ' + argv.importRoot);
      opts.npm = {
        root: importRoot
      };
    }

    if (argv.hoverSelectorPrefix) {
      if (typeof argv.hoverSelectorPrefix === 'boolean') {
        opts.hoverSelectorPrefix = '.vclHoverSupport';
      } else {
        opts.hoverSelectorPrefix = argv.hoverSelectorPrefix;
      }
    }

    debug('including dev: %b', argv.includeDev);
    opts.includeDevDependencies = argv.includeDev;

    var result = null;
    if (isPackage === true) {
      result = vcl.package(css, opts);
    } else {
      result = compile(css, input, opts);
    }

    debug('done compiling. outputting result now');

    // write file to dest or print it to stdout
    var destArg = argv._[1];
    var dest = null;
    if (destArg !== undefined){
      dest = path.resolve(process.cwd(), destArg);
      var destDir = path.dirname(dest);
      mkdirp(destDir, function(err, made) {
        if (err) throw err;
        if (made !== null) {
          console.log('Destination Directory was created.');
        }

        result.then(data => {
          fs.writeFileSync(dest, data);
        console.log(chalk.green('✔ Succesfully compiled input to %s'), destArg);
        })
        .catch((error)=> {
          console.log(error);
        });


      });
    } else {
      result.then(data => {
        process.stdout.write(data);
      })
      .catch((error)=> {
        console.log(error);
      });

    }

    if (argv.watch === true) {
      watch(input, dest);
    }
  };

} else {
  debug('unix piping');
  unixPipe();
}

var watch = function watchFile(file, dest) {
  if (dest !== undefined && dest !== null) {
    console.log('watching file for changes...');
  }

  var baseDir = path.dirname(file);

  var changeHandler = function change(e, name) {
    if (e === 'rename') {
      watcher.close();
      if (name === undefined) {
        var err = 'File renamed, but your platform' +
          'does report the new filename. Aborting.';

        // Don't write to stdout if piping,
        // but output to stderr
        if (dest !== undefined) console.log(err);
        else process.stderr.write(err);

        return;
      }
      file = baseDir + '/' + name;
      watcher = fs.watch(file, changeHandler);
      return;
    }

    recompile(file);
  };

  var recompile = function recompile() {
    if (dest !== undefined) console.log('recompiling');
    fs.readFile(file, {encoding: 'utf8'}, function(err, css) {
      if (err) throw err;
      var result = compile(css, file);
      if (dest === undefined) process.stdout.write(result);
      else {
        fs.writeFile(dest, result, function(err) {
          if (err) throw err;
          console.log(chalk.green('✔ Succesfully compiled input to %s'), dest);
        });
      }
    });
  };

  var watcher = fs.watch(file);
  watcher.on('change', changeHandler);
};
