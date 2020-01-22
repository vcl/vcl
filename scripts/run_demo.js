#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const browserSync = require('browser-sync');
const sass = require('sass');
const chokidar = require('chokidar');

const argv = require('yargs') // eslint-disable-line
              .demandCommand(1, 'module required')
              .option('vcl-root', {
                type: 'string',
                description: 'root directory for vcl imports',
                default: path.resolve(process.cwd(), 'packages/vcl')
              })
              .argv;

const modulesFolder = path.resolve(process.cwd(), argv['vcl-root']);
const moduleName = argv._[0];

const moduleFolder = path.resolve(modulesFolder, moduleName);
const sassInFile = path.resolve(moduleFolder,  'demo.scss');
const buildFolder = path.resolve(moduleFolder, 'build');
const demoFolder = path.resolve(moduleFolder, 'demo');
const cssOutFile = path.resolve(buildFolder,  'index.css');
const cssMapOutFile = path.resolve(buildFolder,  'index.css.map');
const htmlInFile = path.resolve(__dirname, 'run_demo.html');
const htmlOutFile = path.resolve(buildFolder,  'index.html');

const vcl = require(path.resolve(moduleFolder, 'vcl.json'));

mkdirp.sync(buildFolder);
const indexHTML = fs.readFileSync(htmlInFile, 'utf8');
const title = vcl.name ? 'Demo of: ' + vcl.name : 'VCL Demo Page';
const finalContent = indexHTML.replace('<%- title %>', title);
fs.writeFileSync(htmlOutFile, finalContent);
console.log('Created ' + htmlOutFile);

const watch = !!argv['watch'];

const render = () => {
  return new Promise((resolve, reject) => {
    console.log('Building ' + sassInFile);
    sass.render({
      file: sassInFile,
      sourceMap: true,
      outFile: cssOutFile,
      importer: (url, prev, done) => {
        if (url[0] === '~') {
          url = path.resolve(process.cwd(), 'node_modules', url.substr(1));
        }
        return { file: url };
      }
    }, function(error, result) {
      try {
        if(!error){
          fs.writeFileSync(cssOutFile, result.css);
          console.log('Created ' + cssOutFile);
          fs.writeFileSync(cssMapOutFile, result.map);
          console.log('Created ' + cssMapOutFile);
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
    process.exit();
  });

  browserSync({server: [buildFolder, demoFolder] });
} else {
  (async () => {
    try {
      await render();
    } catch(ex) {
      console.error(ex);
    }
  })();
}
