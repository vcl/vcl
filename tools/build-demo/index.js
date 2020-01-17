#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const sass = require('sass');
const chokidar = require('chokidar');

const yargs = require('yargs')
              .describe('vcl-root', 'root directory for vcl imports')
              .describe('watch', 'watch mode');

var argv = yargs.argv;
const PCK = path.resolve(process.cwd(), './package.json');
const pack = JSON.parse(fs.readFileSync(PCK, 'utf8'));

const sassFile = pack.scssDemo || pack.scss;

if (!sassFile) {
  throw new Error('scssDemo or scss not defined in package.json');
}

// Use pkg demoStyle as primary source for demo but fallback to style if it does not exist
const SASS_SRC = path.resolve(process.cwd(), sassFile);
const SASS_TRG = path.resolve(process.cwd(), './build/index.css');
const SASS_MAP_TRG = path.resolve(process.cwd(), './build/index.css.map');

const INDEX_SRC = path.resolve(__dirname, './index.html');
const INDEX_TRG = path.resolve(process.cwd(), './build/index.html');

mkdirp.sync('build');
const indexHTML = fs.readFileSync(INDEX_SRC, 'utf8');
const title = pack.name ? 'Demo of: ' + pack.name : 'VCL Demo Page';
const finalContent = indexHTML.replace('<%- title %>',title);
fs.writeFileSync(INDEX_TRG, finalContent);
console.log('Created ' + INDEX_TRG);

const includePaths = [path.resolve(process.cwd(), 'node_modules')];

const vclRoot = argv['vcl-root'];
const watch = !!argv['watch'];


const render = () => {
  return new Promise((resolve, reject) => {
    console.log('Building ' + SASS_SRC);
    sass.render({
      file: SASS_SRC,
      sourceMap: true,
      outFile: SASS_TRG,
      includePaths,
      importer: function(url, prev, done) {
        if (vclRoot && url.startsWith('@vcl/')) {
          const file = path.resolve(process.cwd(), vclRoot, url.substr(5), 'index.scss');

          done({
            file
          });
        } else {
          done();
        }
      }
    }, function(error, result) {
      try {
        if(!error){
          fs.writeFileSync(SASS_TRG, result.css);
          console.log('Created ' + SASS_TRG);
          fs.writeFileSync(SASS_MAP_TRG, result.map);
          console.log('Created ' + SASS_MAP_TRG);
          resolve(result);
        } else {
          console.error(error);
          reject(error);
        }
      } catch(ex) {
        console.error(ex);
        reject(ex);
      }
    });
  });
}

if (watch) {
  const fileChangeNotify = () => console.log('\nWaiting for file changes...');
  render().then(result => {
    watchlist = result.stats.includedFiles;

    const watcher = chokidar.watch(watchlist, {
      usePolling: false,
      awaitWriteFinish: {
        stabilityThreshold: 50,
        pollInterval: 10
      }
    })
    watcher.on('ready', fileChangeNotify).on('change', file => {
      console.log('Change detected in ' + file);
      (async () => {
        try {
          const result = await render();
          watcher.add(result.stats.includedFiles);
        } catch(ex) {
          console.error(ex);
        }
      })();
    })
  }).catch(ex => {
    console.error(ex);
  });
} else {
  (async () => {
    try {
      await render();
    } catch(ex) {
      console.error(ex);
    }
  })();
}
