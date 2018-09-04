'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var debug = require('debug')('vcldoc');
var _ = require('lodash');
var resolve = require('resolve');
var preprocessor = require('@vcl/preprocessor');
var docClient = require('@vcl/doc-client');
var marked = require('marked');

var getPackageJson = function(name, basedir) {
  debug('gettings package.json for %s from %s', name, basedir);
  function fixNoMain(pkg) {
    // make all modules require-able
    pkg.main = 'package.json';
    return pkg;
  }
  var npmModule = null;
  // get module information
  var npmModulePath = resolve.sync(name, {
    basedir: basedir || process.cwd(),
    packageFilter: fixNoMain
  });
  npmModule = JSON.parse(fs.readFileSync(npmModulePath, 'utf8'));
  npmModule.basePath = path.dirname(npmModulePath) + '/';
  var i = 1 / 0;
  return npmModule;
};

var fetchPackage = function(pack, options) {


  // TODO: get package.json using require
  var name = pack.name;

  debug('fetching package: %s', name);

  _.defaults(options, {
    metaName: 'vcl', // The key in package.json under which the doc gen's meta data are stored
    readmeFile: 'README.md'
  });

  //var npmModule = getPackageJson(name);
  var basePath = pack.basePath;

  if (pack.vcl === undefined) {
    debug('WARN: non vcl package passed!');
    return;
  }

  var readme;

  try {
    readme = fs.readFileSync(basePath + options.readmeFile);
  } catch (e) {
    debug(e);
    return;
  }

  var meta = pack[options.metaName];

  // TODO: cleanup - filter and add
  var docPart = {
    name: name,
    basePath: basePath,
    fullPath: basePath + pack.style,
    docgen: meta,
    dependencies: pack.dependencies,
    devDependencies: pack.devDependencies,
    readme: readme,
    demos: {},
    // extra info
    repository: pack.repository,
    author: pack.author,
    version: pack.version,
    license: pack.license,
    description: pack.description
  };

  if (pack.style) {
    docPart.style = fs.readFileSync(basePath + pack.style, "utf8");
  }

  var part = renderPart(docPart, options);
  return part;

};

// we have all information we need. this function uses it to generate the html
var renderPart = function(docPart, options) {

  if (docPart.vcl === undefined) docPart.vcl = {};

  var lexer = new marked.Lexer();
  var tokens = lexer.lex(docPart.readme.toString());
  var tempLinks = tokens.links;
  debug('lexed part');

  var inUsage = false;
  var usageDepth = 1;

  tokens = _.filter(tokens, function(obj) {
    //console.debug(obj);
    // check if we are in the usage paragraph
    if (obj.type === 'heading') {
      if (obj.depth === 1 && options.removeTopHeading) return false;
      if (inUsage === true && obj.depth <= usageDepth) inUsage = false;
      else if (obj.text.toLowerCase() === 'usage') {
        usageDepth = obj.depth; // depth of the usage heading
        inUsage = true;
      } else if (obj.text.toLowerCase() === 'demo') {
        return false; // filters everything after demo
      }
    }

    debug('inUsage %s', inUsage);

    if (inUsage === false || obj.type !== 'paragraph') return true;

    var result = /^\[(.*)\]\(\/(demo\/.*)\)$/.exec(obj.text);

    if (result !== null && result.length > 0) {
      var exPath = docPart.basePath + result[2];
      var key = path.basename(exPath, '.html');
      obj.text = '<div class="demo vclPanel" id="demo-' + key + '"></div>';

      docPart.demos[key] = fs.readFileSync(exPath, 'utf8');
    }
    return true;
  });

  tokens.links = tempLinks;
  var parsed = marked.parser(tokens);
  debug('done parsing');

  docPart.readme = parsed;

  var fallbackTitle = /@vcl\/(.+)/.exec(docPart.name);

  if (fallbackTitle.length >= 2){
    fallbackTitle = _.capitalize(fallbackTitle[1]);
  } else fallbackTitle = _.capitalize(docPart.name);
  docPart.title = docPart.vcl.title || fallbackTitle;

  if (options.cssProcessor === undefined) {
    options.cssProcessor = function(style, pack) {
      debug('preprocessing %s', pack.name);
      debug('from %s', pack.basePath);

      var css = preprocessor.package(pack.basePath, {
        providers: ['@vcl/default-theme', '@vcl/default-theme-terms'],
        includeDevDependencies: true,
        docGenMode: true
      });
        return css;
    };
  }

return new Promise((resolve, reject) => {
  if (docPart.style && options.cssProcessor !== undefined) {
     let proc = options.cssProcessor(docPart.style, docPart);

    proc.then((result) => {
        docPart.style = result.css;
        if (!docPart.style) docPart.style = '';
        resolve(docPart);
    });
  } else if (!docPart.style) {
    docPart.style = '';
    resolve(docPart);
  }
});

};

function genJson(options) {
  debug('generating json');

  var options = options || {};
  _.defaults(options, {
    basePath: '',
    packages: [],
    parts: [],
    removeTopHeading: true,
    recursive: true,
    includeDevDependencies: true
  });

  function addDependencies(deps, basePath) {
    basePath = basePath || options.basePath || null;
    _.each(deps, function(val, key){
      var json = getPackageJson(key, basePath);
      if (json.vcl === undefined) return; // not a vcl package

      // prevent duplicates
      if (_.some(options.packages, { name: json.name }) === false) {
        options.packages.push(json);
      }
      if (options.recursive === true) {
        if (_.isEmpty(json.dependencies)) return; // no dependencies
        addDependencies(json.dependencies, json.basePath);
      }
    });
  }

  if (options.entryPackage !== undefined) {
    // TODO: use resolve
    debug('using entry package', options.entryPackage);
    var data = require(options.entryPackage);
    var deps = data.dependencies;
    if (options.includeDevDependencies) {
      deps = _.merge(deps || {}, data.devDependencies || {});
    }
    if (_.isEmpty(deps)) throw 'This package has no dependencies';
    addDependencies(deps);
  }

  var _packs = [];
  options.packages.forEach(function(name) {
    var pack = fetchPackage(name, options);
     if (pack) _packs.push(pack);
     pack.then((data) => {
       if (data) options.parts.push(data);
    });
  });

 return Promise.all(_packs)
  .then( value => {
    return options;
  });
}

function generateJson(options) {
  var doc = genJson(options);

  _.defaults(options, {
    output: process.cwd() + '/./doc.json'
  });

  doc.then((data) => {
    fs.writeFileSync(options.output, JSON.stringify(data, null, 2));
  });
}

function generateHtml(options) {
  var doc = genJson(options);

  _.defaults(options, {
    output: process.cwd() + '/./somedoc.html'
  });
  var outputFolder = options.outputFolder;
      
  doc.then((data) => {
    docClient.getBuild(data, function(output) {
      var html = output.html;
      var css = output.css;

      mkdirp(outputFolder, function (err) {
        if (err) return cb(err);
        fs.writeFileSync(outputFolder+'/index.html', html);
        fs.writeFileSync(outputFolder+'/vcl.css', css);
      });
     
    });
  });

}

exports.generate = generateJson;
exports.generateJson = generateJson;
exports.generateHtml = generateHtml;
