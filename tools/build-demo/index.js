#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const sass = require('sass');
const yargs = require('yargs')
              .describe('vcl-root', 'root directory for vcl imports');

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
console.log('Building ' + SASS_SRC);

const includePaths = [path.resolve(process.cwd(), 'node_modules')];

const vclRoot = argv['vcl-root'];

sass.render({
  file: SASS_SRC,
  sourceMap: true,
  outFile: SASS_TRG,
  includePaths,
  importer: function(url, prev, done) {
    if (vclRoot && url.startsWith('@vcl/')) {
      const file = path.resolve(process.cwd(), vclRoot, url.substr(5), 'index.scss');
      return {
        file
      };
    }
    return undefined;
  }
}, function(error, result) {
  if(!error){
    fs.writeFileSync(SASS_TRG, result.css);
    console.log('Created ' + SASS_TRG);
    fs.writeFileSync(SASS_MAP_TRG, result.map);
    console.log('Created ' + SASS_MAP_TRG);
  } else {
    console.error(error);
  }
});
