#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const browserSync = require('browser-sync');
const sass = require('sass');
const chokidar = require('chokidar');

const argv = require('yargs') // eslint-disable-line
              .demandCommand(1, 'Error: module name required as argument')
              .argv;

const moduleName = argv._[0];

const modulesFolder = path.resolve(process.cwd(), 'packages/vcl');
const moduleFolder = path.resolve(modulesFolder, moduleName);
const sassInFile = path.resolve(moduleFolder,  'demo.scss');
const buildFolder = path.resolve(moduleFolder, 'build');
const demoFolder = path.resolve(moduleFolder, 'demo');
const cssOutFile = path.resolve(buildFolder,  'index.css');
const cssMapOutFile = path.resolve(buildFolder,  'index.css.map');
const htmlInFile = path.resolve(__dirname, 'demo.html');
const htmlOutFile = path.resolve(buildFolder,  'index.html');

const vcl = require(path.resolve(moduleFolder, 'vcl.json'));

mkdirp.sync(buildFolder);
const indexHTML = fs.readFileSync(htmlInFile, 'utf8');
const title = vcl.name ? 'Demo of: ' + vcl.name : 'VCL Demo Page';
const finalContent = indexHTML.replace('<%- title %>', title);
fs.writeFileSync(htmlOutFile, finalContent);
console.log('Created ' + htmlOutFile);

let watch = argv['watch'];
if (typeof watch !== 'boolean') {
  watch = true;
}

const render = () => {
  try {
    console.log('Building ' + sassInFile);
    const result = sass.compile(sassInFile, {
      style: "expanded",
      sourceMap: true,
      loadPaths: [path.resolve(process.cwd(), 'node_modules')],
    });
    fs.writeFileSync(cssOutFile, result.css);
    console.log('Created ' + cssOutFile);
    if (result.sourceMap) {
      fs.writeFileSync(cssMapOutFile, JSON.stringify(result.sourceMap));
      console.log('Created ' + cssMapOutFile);
    }
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

if (watch) {
  const fileChangeNotify = () => console.log('\nWaiting for file changes...');
  let result;
  try {
    result = render();
    watchlist = result.stats.includedFiles;

    const watcher = chokidar.watch(watchlist, {
      usePolling: false,
      awaitWriteFinish: {
        stabilityThreshold: 50,
        pollInterval: 10
      }
    });
    watcher.on('ready', fileChangeNotify).on('change', file => {
      console.log('Change detected in ' + file);
      try {
        const result = render();
        watcher.add(result.stats.includedFiles);
      } catch (ex) {
        console.error(ex);
      }
    });
  } catch (ex) {
    console.error(ex);
    process.exit();
  }

  browserSync({server: [buildFolder, demoFolder] });
} else {
  try {
    render();
  } catch (ex) {
    console.error(ex);
  }
}
