#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');
const debug = require('debug')('vcl-docgen:cli');
const marked = require('marked');
const sass = require('sass');

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

const getModuleFolders = (source) =>
  fs
    .readdirSync(source)
    .map((name) => ({ name, full: path.join(source, name) }))
    .filter((d) => fs.lstatSync(d.full).isDirectory())
    .map((d) => d.full);

const argv = yargs.argv;

const verbose = argv.verbose;
const root = path.resolve(process.cwd(), argv.root || '');
const name = argv.name;
const docFolder = argv.doc;

const baseModuleFolder = path.resolve(root, argv._[0]);
const outputFolder = path.join(root, argv._[1]);

const rawHtml = (exports.rawHtml = fs
  .readFileSync(__dirname + '/build/dist/index.html', 'utf8')
  .split("<script>define(['web-components/doc-index.js']);</script>")
  .join(''));
const appBundle = fs.readFileSync(
  __dirname + '/build/dist/web-components/doc-index.js',
  'utf8'
);
const polyfillBundle = fs.readFileSync(
  __dirname +
    '/build/dist/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js',
  'utf8'
);

const lernaPckJSON = fs.readFileSync(
  path.join(__dirname, '..', '..', 'lerna.json'),
  'utf8'
);
const version = JSON.parse(lernaPckJSON).version;

if (verbose) {
  debug.enabled = true;
}

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const sassOptions = {
  style: 'expanded',
  loadPaths: [baseModuleFolder, path.resolve(process.cwd(), 'node_modules')],
};

const render = (dataOrFile) => {
  try {
    if (fs.existsSync(dataOrFile)) {
      // Compile from file
      const result = sass.compile(dataOrFile, sassOptions);
      return result;
    } else {
      // Compile from string
      const result = sass.compileString(dataOrFile, sassOptions);
      return result;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

(async () => {
  try {
    // Compile from file and write CSS as string
    const result = sass.compile('styles.scss', sassOptions);
    fs.writeFileSync('styles.css', result.css);

    debug('using module folder', baseModuleFolder);

    const moduleFolders = getModuleFolders(baseModuleFolder);

    let docPackage;
    if (docFolder) {
      docPackage = await getMeta(path.join(root, docFolder));
    }

    if (!Array.isArray(moduleFolders) || moduleFolders.length === 0) {
      throw 'This folder has no modules';
    }

    const packages = moduleFolders.reduce((packages, moduleFolder) => {
      const json = getMeta(moduleFolder);

      if (!json) {
        return packages;
      }

      if (packages.some((pkg) => pkg.name === json.name)) {
        return packages;
      }
      return [...packages, json];
    }, []);

    if (docPackage) {
      packages.unshift(docPackage);
    }

    const parts$ = packages.map((pkg) => fetchPackage(pkg));
    const parts = await Promise.all(parts$);
    const doc = {
      name,
      version,
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
      '</script>',
    ];

    const prodText = prodStuff.join('\n');

    const html = rawHtml.split('<!-- prod -->').join(prodText);
    const css = fs.readFileSync(__dirname + '/styles.css', 'utf8');

    fs.writeFileSync(path.resolve(outputFolder, 'index.html'), html);
    fs.writeFileSync(path.resolve(outputFolder, 'styles.css'), css);
    runDemoServer();
  } catch (ex) {
    console.error(ex);
  }
})();

function getMeta(modulePath) {
  debug('gettings package.json from %s', modulePath);
  // get module information
  const modulePkgFilePath = path.resolve(modulePath, 'vcl.json');

  if (!fs.existsSync(modulePkgFilePath)) {
    return undefined;
  }

  const vcl = JSON.parse(fs.readFileSync(modulePkgFilePath, 'utf8'));
  return {
    name: vcl.name,
    basePath: modulePath + '/',
    vcl,
  };
}

async function fetchPackage(pack) {
  // TODO: get package.json using require
  const name = pack.name;

  debug('fetching package: %s', name);

  const basePath = pack.basePath;

  if (!pack) {
    debug('WARN: non vcl package passed!');
    return;
  }

  const readmeFile = path.resolve(basePath, 'README.md');

  const readme = fs.existsSync(readmeFile)
    ? fs.readFileSync(readmeFile)
    : undefined;

  const styleFile = fs.existsSync(path.resolve(basePath, 'demo.scss'))
    ? 'demo.scss'
    : undefined;

  // TODO: cleanup - filter and add
  var docPart = {
    name,
    basePath,
    styleFile,
    // fullPath: path.resolve(basePath, pack.style),
    docgen: pack.vcl || {},
    dependencies: pack.dependencies,
    devDependencies: pack.devDependencies,
    readme,
    demos: {},
    // extra info
    repository: pack.repository,
    author: pack.author,
    version: pack.version,
    license: pack.license,
    description: pack.description,
  };

  return renderPart(docPart);
}

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

  tokens = tokens.filter(function (obj) {
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
      var html = '<div class="demo panel" id="demo-' + key + '"></div>';
      obj.tokens[0].type = 'text';
      obj.tokens[0].text = html;
      const demo = fs.readFileSync(exPath, 'utf8');
      docPart.demos[key] = encodeURIComponent(demo);
    }
    return true;
  });

  tokens.links = tempLinks;
  var parsed = marked.parser(tokens);
  debug('done parsing');

  docPart.readme = parsed;

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  docPart.title = capitalize(docPart.name);

  if (docPart.styleFile) {
    // const data = `@import "${docPart.name}/${docPart.styleFile}";`;
    // debug('preprocessing %s with import %s', docPart.name);
    // debug(data);
    // console.log(data)
    // const result = await render(data);
    // docPart.style = result.css.toString() || '';
  } else if (!docPart.styleFile) {
    docPart.style = '';
  }

  return docPart;
}

function runDemoServer() {
  // Don't open the browser if running from github action
  if (process.argv[6] == 'automatedRun') return;

  const module = process.argv[6] || 'button'; // Default value `button`
  const isWatch = process.argv[7] == 'watch' ? true : false;

  var browserSync = require('browser-sync').create();

  browserSync.init({
    watch: isWatch,
    watchOptions: {
      paths: [root],
    },
    server: './dist',
    startPath: '/#' + module,
    open: false,
  });
}
