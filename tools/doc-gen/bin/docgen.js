#!/usr/bin/env node
'use strict';

var minimist = require('minimist');
var docGenerator = require('../docgen');
var resolve = require('path').resolve;

// arguments
var argv = minimist(process.argv.slice(2));

// resolve paths
// TODO: more pretty
if (argv.entry) argv.entry = resolve(argv.entry);
if (argv.output) argv.output = resolve(argv.output);
if (argv.basePath) argv.basePath = resolve(argv.basePath);

docGenerator.generateHtml({
  name: argv.name || 'VCL Documentation',
  entryPackage: argv.entry || (process.cwd() + '/package.json'),
  outputFolder: argv.outputFolder || './vcl-documentation',
  basePath: argv.basePath || process.cwd()
});
