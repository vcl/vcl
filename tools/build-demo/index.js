#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const childProcess = require('child_process');

const PCK = path.resolve(process.cwd(), './package.json');
const INDEX_SRC = path.resolve(__dirname, './index.html');
const INDEX_TRG = path.resolve(process.cwd(), './build/index.html');

const SSS_INDEX_SRC = path.resolve(process.cwd(), './index.sss');
const SSS_DEMO_SRC = path.resolve(process.cwd(), './demo.sss');

const PREPROCESSOR_SCRIPT_PATH = path.resolve(process.cwd(), 'node_modules/@vcl/preprocessor/bin/vcl.js');

// Use demo.sss as primary source for demo but fallback to index.sss if it does not exist
const SSS_SRC = fs.existsSync(SSS_DEMO_SRC) ? SSS_DEMO_SRC : SSS_INDEX_SRC;
const SSS_TRG = path.resolve(process.cwd(), './build/index.css');

const pack = JSON.parse(fs.readFileSync(PCK, 'utf8'));

mkdirp.sync('build');
const indexHTML = fs.readFileSync(INDEX_SRC, 'utf8');
const title = pack.name ? 'Demo of: ' + pack.name : 'VCL Demo Page';
const finalContent = indexHTML.replace('<%- title %>',title);
fs.writeFileSync(INDEX_TRG, finalContent);
console.log('Created ' + INDEX_TRG);

console.log('Building ' + SSS_SRC);

const proc = childProcess.fork(PREPROCESSOR_SCRIPT_PATH, [
  SSS_SRC,
  SSS_TRG,
  '--watch'
]);

// listen for errors as they may prevent the exit event from firing
proc.on('error', function (err) {
  console.error(err);
  process.exit();
});

// execute the callback once the process has finished running
proc.on('exit', function (code) {
  process.exit(code);
});
