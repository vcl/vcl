#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');
const debug = require('debug')('vcl-docgen:cli');
const vcl = require('@vcl/preprocessor');
const marked = require('marked');

const yargs = require('yargs')
  .help('help')
  .alias('help', 'h')
  .demandCommand(2)
  .usage('Usage: vcl-doc-gen <module folder> <output folder>')
  .describe('root', 'base folder')
  .alias('root', 'i')
  .describe('name', 'doc name')
  .alias('name', 'n')
  .describe('doc', 'doc folder')
  .describe('verbose')
  .alias('v', 'verbose');

const getModuleFolders = source => fs.readdirSync(source)
  .map(name => ({ name, full: path.join(source, name)}))
  .filter(d => fs.lstatSync(d.full).isDirectory())
  .map(d => d.full);

const argv = yargs.argv;

const verbose = argv.verbose;
const root = path.resolve(process.cwd(), argv.root || '');
const name = argv.name;
const docFolder = argv.doc;

const baseModuleFolder = path.resolve(root, argv._[0]);
const outputFolder = path.join(root, argv._[1]);

const rawHtml = exports.rawHtml = fs.readFileSync(__dirname + '/build/dist/index.html', 'utf8')
                                    .split('<script>define([\'web-components/doc-index.js\']);</script>').join('');
const appBundle =  fs.readFileSync(__dirname + '/build/dist/web-components/doc-index.js', 'utf8');
const polyfillBundle =  fs.readFileSync(__dirname + '/build/dist/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', 'utf8');

if (verbose) {
  debug.enabled = true;
}

(async () => {
  try {
    debug('using module folder', baseModuleFolder);

    const moduleFolders = getModuleFolders(baseModuleFolder);

    let docPackage;
    if (docFolder) {
      docPackage = await getPackageJson(path.join(root, docFolder));
    }

    if (!Array.isArray(moduleFolders) || moduleFolders.length === 0) {
      throw 'This folder has no modules'
    };

    const packages = moduleFolders.reduce((packages, moduleFolder) => {
      const json = getPackageJson(moduleFolder);
      if (json.vcl === undefined || packages.some(pkg => pkg.name === json.name )) {
        return packages;
      }
      return [...packages, json];
    }, []);

    if (docPackage) {
      packages.unshift(docPackage);
    }

    const parts$ = packages.map(pkg => fetchPackage(pkg));
    const parts = await Promise.all(parts$);
    const doc = {
      name,
      basePath: '',
      packages,
      parts,
    };

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

    const html = rawHtml.split('<!-- prod -->').join(prodText);
    const css = fs.readFileSync(__dirname + '/styles.css', 'utf8');

    fs.writeFileSync(path.resolve(outputFolder, 'index.html'), html);
    fs.writeFileSync(path.resolve(outputFolder, 'styles.css'), css);
  } catch (ex) {
    console.error(ex);
  }
})();

function getPackageJson(modulePath) {
  debug('gettings package.json from %s', modulePath);
  // get module information
  const modulePkgFilePath = path.resolve(modulePath, 'package.json');

  const pkg = JSON.parse(fs.readFileSync(modulePkgFilePath, 'utf8'));
  pkg.basePath = modulePath + '/';
  return pkg;
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

  return renderPart(docPart);
};

// we have all information we need. this function uses it to generate the html
async function renderPart(docPart) {

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

    const result = await vcl(sss, {
      root: process.cwd(),
      vclRoot: baseModuleFolder
    });

    docPart.style = result.css || '';
  } else if (!docPart.styleFile) {
    docPart.style = '';
  }
  return docPart;
};


