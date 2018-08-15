'use strict';

var fs = require('fs');
var path = require('path');

var _ = require('lodash');
var gutil = require('gulp-util');
var through = require('through2');
var opn = require('opn');
var connect = require('gulp-connect');

var PluginError = gutil.PluginError;
var mainModule = path.dirname(module.parent.filename);

var tasks = {};

var rPath = function realPath(path){
  return mainModule + '/' + path;
};

tasks.connect = connect;

tasks.server = function(){
  return function server(){
    connect.server({
      root: [ rPath(''), rPath('build'), rPath('node_modules') ],
      port: 8077,
      livereload: true
    });
    opn('http://localhost:8077/example.html');
  };
};

tasks.wrapHtml = function(options){
  options = options || {};
  var template = _.template(fs.readFileSync(__dirname + '/index.html'));
  var stream = through.obj(function(file, enc, cb) {
    if (file.isBuffer()) {
      var html = file.contents.toString('utf8');
      var title = 'Demo of: ' + options.title || 'VCL Demo Page';
      if (options.styles && options.styles.indexOf('index.css') === -1) {
        options.styles.push('index.css');
      }
      var result = template({
        content: html,
        styles: options.styles || ['index.css'],
        title: title
      });
      file.contents = new Buffer(result);
    }

    if (file.isStream()) {
      var err = new PluginError('vcl-build-demo', 'Streams are not supported!');
      this.emit('error', err);
    }

    this.push(file);
    return cb();
  });

  // returning the file stream
  return stream;
};

module.exports = tasks;
