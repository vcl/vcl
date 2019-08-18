#!/usr/bin/env node

const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const childProcess = require('child_process');

const PCK = path.resolve(process.cwd(), './package.json');
const INDEX_SRC = path.resolve(__dirname, './index.html');
const INDEX_TRG = path.resolve(process.cwd(), './build/index.html');

const PREPROCESSOR_SCRIPT_PATH = path.resolve(process.cwd(), 'node_modules/@vcl/preprocessor/bin/vcl.js');

const pack = JSON.parse(fs.readFileSync(PCK, 'utf8'));

// Use pkg demoStyle as primary source for demo but fallback to style if it does not exist
const SSS_SRC = path.resolve(process.cwd(), pack.demoStyle || pack.style);
const SSS_TRG = path.resolve(process.cwd(), './build/index.css');

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
  ...process.argv.slice(2)
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
