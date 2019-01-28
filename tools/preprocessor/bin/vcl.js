#!/usr/bin/env node

'use strict';

var debug = require('debug')('vcl-preprocessor:cli');
var vcl = require('../index');
var path = require('path');
var info = require('../package.json');
var chalk = require('chalk');

debug('cli time');

var yargs = require('yargs')
  .version(info.version, 'version')
  .help('help')
  .alias('version', 'v')
  .alias('help', 'h')
  .usage('Usage: vcl-preprocessor <input> <output>')
  .describe('watch', 'watches the input file for changes')
  .alias('watch', 'w')
  .describe('import-root', 'base directory for file based imports')
  .alias('import-root', 'i')
  .describe('source-map', 'enable source maps')
  .alias('source-map', 's')
  .describe('optimize', 'optimize css')
  .alias('optimize', 'o')
  .describe('theme', 'use theme')
  .alias('theme', 't')
  .count('verbose')
  .alias('V', 'verbose');

// Examples
yargs
  .example('vcl-preprocessor index.sss dist/compiled.css',
    'Compile index.sss and output to dist/compiled.css');

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

const opts = {};

if (argv.root) {
  var root = path.resolve(argv.root);
  console.log('using root: ' + root);
  opts.root = root;
}

if (argv.optimize) {
  opts.optimize = true;
}

if (argv['source-map']) {
  opts.sourceMap = true;
}

if (argv['watch']) {
  opts.watch = true;
}

if (argv['theme']) {
  opts.theme = argv['theme'];
}

if (process.stdin.isTTY) {
  var inputFile = argv._[0];
  var outputFile = argv._[1];

  if (!inputFile) {
    return yargs.showHelp();
  }
  vcl.compileFile(inputFile, outputFile, opts);
} else {
  var buffers = [];

  process.stdin.on('data', function(data){
    buffers.push(new Buffer(data));
  });

  process.stdin.on('end', function(){
    var sssRaw = new Buffer.concat(buffers);
    var sss = sssRaw.toString();
    vcl(sss, opts).then(({css}) => {
      process.stdout.write(css);
    });
  });
}




