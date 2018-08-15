'use strict';

var path = require('path');
var fs = require('fs');
var _ = require('lodash');
var resolve = require('resolve');
var debug = require('debug')('vcl-preprocessor');
var whitespace = require('css-whitespace');
var mq4HoverShim = require('mq4-hover-shim');

// PostCSS Modules

var postcss = require('postcss');
var colors = require('postcss-color-function');
var npmimport = require('postcss-import');
var vars = require('postcss-css-variables');
var rucksack = require('rucksack-css');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var cssnext = require("postcss-cssnext");
var namespace = require('postcss-add-namespace');
var selectorNamespace = require('postcss-selector-namespace');
var postcssNesting = require('postcss-nesting');
var safe = require('postcss-safe-parser');


var Processor = function Processor(css, opts) {
  opts = opts || {};

  if (css === undefined) {
    throw new Error('Got no css input');
  }

  if (opts.whitespace !== false) {
    css = whitespace(css); // convert to normal css
  }

  const compiler = postcss();

  let npmOptions = {
    // addModulesDirectories: ["node_modules"],
    // onImport: function(files) {
    //   console.log('file', files);
    // },
    load: (filename, importOptions) => {
      let css = fs.readFileSync(filename, 'utf8');
      if (path.extname(filename) === '.styl') {
        css = whitespace(css);
      }
      return css;
    },
     root: opts.root || process.cwd()
  };


  if (opts.npm !== undefined) {
    _.extend(npmOptions, opts.npm);
  }

   compiler.use(npmimport(npmOptions));
   compiler.use(postcssNesting());
   compiler.use(vars()); // CSS4 compatible variable support
   compiler.use(colors()); // W3C CSS4 Color functions
   compiler.use(cssnext()); // postcss-cssnext
   compiler.use(rucksack()); // rucksack css
   // compiler.use(autoprefixer()); // autoprefixer Not needed due to cssnext()

   // compiler.use(cssnano()); // cssnano 4 production

  if (opts.namespaceOptions) {
    compiler.use(namespace(opts.namespaceOptions.class));
    compiler.use(selectorNamespace({ selfSelector: ':--component', namespace: opts.namespaceOptions.selector }));
  }

  if (opts.useMq4HoverShim) {
    compiler.use(mq4HoverShim.postprocessorFor({hoverSelectorPrefix: opts.mq4HoverShimOptions && opts.mq4HoverShimOptions.shimPrefixClass || '.vclHoverSupport'}));
  }
  opts.parser = safe;
  opts.from = undefined;

   return compiler.process(css, opts);
};

var createProcessor = function cProcessor(css, opts) {
  return new Processor(css, opts);
};

// TODO: move advanced functions to seperate file

var fetchPackage = function(name) {

  function fixNoMain(pkg) {
    // make all modules require-able
    pkg.main = 'package.json';
    return pkg;
  }
  var npmModule = null;
  // get module information

  debug('fetching %s from %s', name, process.cwd());

  // TODO: fix loading relative from other module
  var npmModulePath = resolve.sync(name, {
    basedir: process.cwd(),
    packageFilter: fixNoMain
  });
  var npmModuleBaseDir = path.dirname(npmModulePath);
  npmModule = JSON.parse(fs.readFileSync(npmModulePath, 'utf8'));
  npmModule.baseDir = npmModuleBaseDir;
  return npmModule;
};

// TODO: clean this up!
// TODO: split into smaller testable functions
var getVclDeps = function(pack, opts) {
  var deps = {};

  if (opts.includeDevDependencies === true) {
    // merge normal & dev dependencies
    debug('including dev depdencies');
    deps = _.merge(pack.dependencies || {} , pack.devDependencies || {});
  } else {
    // only normal dependencies
    deps = pack.dependencies;
  }

  pack.vcl = pack.vcl || {};

  debug('checking dependencies for %s', pack.name);

  var providers = opts.providers || {};
  var unorderedDeps = [];

  addProvider(pack); // providers from root module

  // checking deps for vcl property
  _.each(deps, function(version, name) {
    debug('%s dependency: %s', pack.name, name);
    var npmModule = null;
    try {
      npmModule = fetchPackage(name);
    } catch(e){
      if (pack.devDependencies && pack.devDependencies[name] !== undefined){
        return debug('module %s not found (skipping - dev depdency)', name);
      } else{
        if (opts.ignoreMissingDependencies || opts.docGenMode) {
          return debug('No file or npm module named ' +
            name + ' found in '+ process.cwd());
        } else {

          throw new Error('No file or npm module named ' +
            name + ' found in '+ process.cwd());
        }
      }
    }
    if (npmModule.style === undefined && npmModule.vcl === undefined) {
      // not a vcl module, skip
      return;
    }

    if (npmModule.vcl === undefined) {
      debug('warning: no vcl meta data for ' + npmModule.name);
      // patchin
      npmModule.vcl = {};
    }

    // add providers
    addProvider(npmModule);

    unorderedDeps.push(npmModule);
  });

  unorderedDeps.push(pack);

  // order
  debug('== ordering packages ==');
  var orderedDeps = [];

  // cheap sorting algorithm
  _.each(unorderedDeps, function(dep) {
    debug('ordering %s', dep.name);
    satisfy(dep);
  });

  return orderedDeps;

  function addProvider(npmModule) {
    if (npmModule.vcl && npmModule.vcl.provides) {
      // allow one string only
      if (_.isString(npmModule.vcl.provides)) {
        npmModule.vcl.provides = [npmModule.vcl.provides];
      }
      npmModule.vcl.provides.forEach(function(provides) {
        debug('adding provider: %s', provides);
        if (providers[provides] !== undefined) {
          throw new Error('There can only be one ' + provides + ' provider');
        }
        providers[provides] = npmModule;
      });
    }
  }

  function satisfy(dep) {
    var needs = dep.vcl.needs || [];

    // allow one string only
    if (_.isString(needs)) needs = [needs];
    // already in list
    if (_.some(orderedDeps, { name: dep.name })) {
      return debug('%s already sorted', dep.name);
    }
    if (isSatisfied(needs)) {
      orderedDeps.push(dep);
      debug('+ adding %s to ordered list.', dep.name);
      return;
    } else debug('%s is not satisfied', dep.name);
    _.forEach(needs, function(need) {
      // get provider
      var provider = providers[need];
      if (provider === undefined) {
        throw new Error('module ' + dep.name +
          ' needs ' + need + ', but its not provided by any module');
      }

      satisfy(provider);
      // if (_.some(orderedDeps, { name: provider.name })) return;
      //  debug('+ adding %s to ordered list', provider.name);
      //  orderedDeps.push(provider);
    });

    debug('done with depdendencies for %s', dep.name);
    orderedDeps.push(dep);
    debug('+ adding %s to ordered list', dep.name);
  }

  function isSatisfied(needs) {
    if (needs.length === 0) return true;
    if (orderedDeps.length === 0) return false;
    return _.includes(orderedDeps, { provides: needs });
  }
};


var preProcessPackage = function(pack, opts) {
  opts = opts || {};
  debug('cwd: %s', process.cwd());

  // get the package.json
  var npmModule = null;
  if (_.isString(pack)) {
    npmModule = fetchPackage(pack);
  } else {
    npmModule = pack;
    npmModule.baseDir = process.cwd();
  }

  if (npmModule.style === undefined) {
    throw new Error('npm module "' + npmModule.name +
      '" needs a style property in order to be compiled');
  }

  debug('processing npm package');

  var pureCss = [];
  var deps = getVclDeps(npmModule, opts);
  debug('final list:');


  var virtualImport = [];

  // fetch the entry css
  // TODO: allow plain css
  var entryPack = _.remove(deps, { name: npmModule.name })[0];
  var entryPath = path.resolve(entryPack.baseDir, entryPack.style);
  var entryCss;
  if (entryPack.style) {
    entryCss = fs.readFileSync(entryPath, 'utf8');
  }

  // finally fetch the css and process it
  _.each(deps, function(dep) {
    var depPath = path.resolve(dep.baseDir, dep.style);
    if (path.extname(depPath) === '.css'){
      var depCss = fs.readFileSync(depPath, 'utf8');
      return pureCss.push(depCss);
    }
    debug(dep.name);
    virtualImport.push('@import "' + dep.name + '"');
  });

  // the newline is important!
  var everything = virtualImport.join('\n');
  if (opts.docGenMode === true) everything += '\n@import "' + npmModule.name + '"';
  else everything += '\n' + entryCss;
  if (!opts.npm) opts.npm = {};
  opts.npm.root = path.dirname(path.resolve(entryPath));

  var done = new Processor(everything, opts);
  return done;
};

module.exports = createProcessor;
module.exports.package = preProcessPackage;
