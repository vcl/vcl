'use strict';

var fs = require('fs');

var rawHtml = exports.rawHtml = fs.readFileSync(__dirname + '/build/dist/index.html', 'utf8')
.split('<script>define([\'web-components/doc-index.js\']);</script>').join('');
var appBundle =  fs.readFileSync(__dirname + '/build/dist/web-components/doc-index.js', 'utf8');
var polyfillBundle =  fs.readFileSync(__dirname + '/build/dist/node_modules/@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js', 'utf8');

// TODO: document this better
exports.getBuild = function(doc, cb) {

    var customHtml = null;
    if (doc.customHTML) {
      customHtml = doc.customHTML;
      delete doc.customHTML;
    }

    if (doc) {
      var stringDoc = JSON.stringify(doc, null, 3);
      var inlineScript = '\nwindow.doc = ' + stringDoc + ';';
    }

    var prodStuff = [
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

    // add custom html after that
    if (customHtml) prodStuff.push(customHtml);

    var prodText = prodStuff.join('\n');

    var doneHTML = rawHtml.split('<!-- prod -->').join(prodText);

    var doneCSS =fs.readFileSync(__dirname + '/vcl.css', 'utf8');
    
    var done = { html:doneHTML, css:doneCSS }

    if (cb) cb(done);
};
