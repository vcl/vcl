#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { style } = require('./breakpoints');

const outFile = path.resolve(__dirname, 'breakpoints.generated.scss');
fs.writeFileSync(outFile, style);
