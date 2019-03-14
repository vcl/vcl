#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');
const resolve = require('resolve');
const debug = require('debug')('vcl-docgen:cli');
const mkdirp = require('mkdirp');
const vcl = require('@vcl/preprocessor');
const marked = require('marked');

const yargs = require('yargs')
  .help('help')
  .alias('help', 'h')
  .demandCommand(2)
  .usage('Usage: vcl-doc-gen <input package file> <output folder>')
  .describe('root', 'base directory')
  .alias('root', 'i')
  .describe('name', 'doc name')
  .alias('name', 'n')
  .describe('verbose')
  .alias('v', 'verbose');


const argv = yargs.argv;

const verbose = argv.verbose;
const root = path.resolve(process.cwd(), argv.root || '');
const name = argv.name;

const pkgFile = path.resolve(root, argv._[0]);
const outputFolder = path.join(root, argv._[1]);

if (verbose) {
  debug.enabled = true;
}

(async () => {
  try {
    debug('using entry package', pkgFile);

    const pkg = require(pkgFile);

    const deps = Object.keys(pkg.dependencies);

    if (!Array.isArray(deps) || deps.length === 0) {
      throw 'This package has no dependencies'
    };

    const packages = deps.reduce((packages, dep) => {
      const json = getPackageJson(dep, root);
      if (json.vcl === undefined || packages.some(pkg => pkg.name === json.name )) {
        return packages;
      }
      return [...packages, json];
    }, []);

    const parts$ = packages.map(pkg => fetchPackage(pkg));

    const parts = await Promise.all(parts$);

    const doc = {
      name,
      basePath: '',
      packages,
      parts,
      entryPackage: "/Restore/vcl/vcl/vcl.github.io/package.json",
      includeDevDependencies: true,
      metaName: "vcl",
      output: "/Restore/vcl/vcl/vcl.github.io/./somedoc.html",
      outputFolder: "./dist",
      readmeFile: "README.md",
      recursive: true,
      removeTopHeading: true
    };


    const { html, css } = createWC(doc);

    mkdirp.sync(outputFolder);
    fs.writeFileSync(path.resolve(outputFolder, 'index.html'), html);
    fs.writeFileSync(path.resolve(outputFolder, 'styles.css'), css);


  } catch (ex) {
    console.error(ex);
  }
})();

function getPackageJson(name, basedir) {
  debug('gettings package.json for %s from %s', name, basedir);
  // get module information
  var npmModulePath = resolve.sync(name, {
    basedir: basedir || process.cwd(),
    packageFilter: (pkg) => {
      // make all modules require-able
      pkg.main = 'package.json';
      return pkg;
    }
  });
  const npmModule = JSON.parse(fs.readFileSync(npmModulePath, 'utf8'));
  npmModule.basePath = path.dirname(npmModulePath) + '/';
  return npmModule;
};

async function fetchPackage(pack) {

  // TODO: get package.json using require
  const name = pack.name;

  debug('fetching package: %s', name);

  const basePath = pack.basePath;

  if (pack.vcl === undefined) {
    debug('WARN: non vcl package passed!');
    return;
  }

  const readmeFile = path.resolve(basePath, 'README.md')

  const readme = fs.existsSync(readmeFile) ? fs.readFileSync(readmeFile) : undefined;

  const styleFile = pack.demoStyle || pack.style;

  // TODO: cleanup - filter and add
  var docPart = {
    name,
    basePath,
    styleFile,
    // fullPath: path.resolve(basePath, pack.style),
    docgen: pack['vcl'] || {},
    dependencies: pack.dependencies,
    devDependencies: pack.devDependencies,
    readme,
    demos: {},
    // extra info
    repository: pack.repository,
    author: pack.author,
    version: pack.version,
    license: pack.license,
    description: pack.description
  };



  if (styleFile) {
    // docPart.style =  fs.readFileSync(path.resolve(basePath, styleFile), "utf8");
  }

  // debug(name, docPart);

  return renderPart(docPart);
};

// we have all information we need. this function uses it to generate the html
async function renderPart(docPart, options) {

  if (docPart.vcl === undefined) {
    docPart.vcl = {};
  }

  var lexer = new marked.Lexer();
  var tokens = lexer.lex(docPart.readme.toString());
  var tempLinks = tokens.links;
  debug('lexed part');

  var inUsage = false;
  var usageDepth = 1;

  tokens = tokens.filter(function(obj) {
    // check if we are in the usage paragraph
    if (obj.type === 'heading') {
      if (obj.depth === 1) {
        return false;
      }
      if (inUsage === true && obj.depth <= usageDepth) {
        inUsage = false;
      } else if (obj.text.toLowerCase() === 'usage') {
        usageDepth = obj.depth; // depth of the usage heading
        inUsage = true;
      } else if (obj.text.toLowerCase() === 'demo') {
        return false; // filters everything after demo
      }
    }

    // debug('inUsage %s', inUsage);

    if (inUsage === false || obj.type !== 'paragraph') {
      return true;
    }

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

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  if (fallbackTitle.length >= 2){
    fallbackTitle = capitalize(fallbackTitle[1]);
  } else {
    fallbackTitle = capitalize(docPart.name);
  }
  docPart.title = docPart.vcl.title || fallbackTitle;

  if (docPart.styleFile) {

    const sss = `@import "${docPart.name}/${docPart.styleFile}"`;

    debug('preprocessing %s with import %s', docPart.name, sss);

    const result = await vcl(sss);

    docPart.style = result.css || '';
  } else if (!docPart.styleFile) {
    docPart.style = '';
  }
  return docPart;
};


const rawHtml = exports.rawHtml = fs.readFileSync(__dirname + '/build/dist/index.html', 'utf8')
                                    .split('<script>define([\'web-components/doc-index.js\']);</script>').join('');
const appBundle =  fs.readFileSync(__dirname + '/build/dist/web-components/doc-index.js', 'utf8');
const polyfillBundle =  fs.readFileSync(__dirname + '/build/dist/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', 'utf8');

function createWC(doc) {

    const inlineScript = '\nwindow.doc = ' + JSON.stringify(doc, null, 3) + ';';

    const prodStuff = [
      '<script>',
      inlineScript,
      '</script>',
      '<script>',
      polyfillBundle,
      '</script>',
      '<script>',
      appBundle,
      '</script>'
    ]

    const prodText = prodStuff.join('\n');

    const doneHTML = rawHtml.split('<!-- prod -->').join(prodText);

    const doneCSS = fs.readFileSync(__dirname + '/styles.css', 'utf8');

    return { html: doneHTML, css: doneCSS };
};
