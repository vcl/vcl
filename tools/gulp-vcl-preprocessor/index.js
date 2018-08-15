'use strict';

var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var vcl = require('@vcl/preprocessor');
var PluginError = gutil.PluginError;

// consts
var PLUGIN_NAME = "gulp-vcl-preprocessor";

// plugin level function (dealing with files)
function gulpVclPreprocessor(opts) {
  opts = opts || {};

  // creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, cb) {



    if (file.isBuffer()) {
      var compiler = null;
      var fallBackName = 'style.css';

      if (opts.package === true) {
        // build a module
        try {
          var packagejson = JSON.parse(file.contents.toString('utf8'));
          compiler = vcl.package(packagejson, opts);
        } catch (e) {
          this.emit('error', e);
        }
      } else {
        let styl = file.contents.toString('utf8'); // vcl/reworkcss uses strings

          if(file.path) {
            opts.source = file.path;
            opts.npm = file.npm;
            fallBackName = path.basename(file.path, 'styl') + '.css';
          }

        compiler = vcl(styl, opts);
      }

      compiler.then( (result) => {
        file.contents = new Buffer(result.css);
        file.path = opts.output || fallBackName;

        this.push(file);
        return cb();
      }).catch((error)=> {
          console.log("error", error);
        });

    }

    if (file.isStream()) {
      var err = new PluginError(PLUGIN_NAME, 'Streams are not supported!');
      this.emit('error', err);
      return cb();
    }

    if(file.contents === null) {
      return cb();
    }

    
  });

  // returning the file stream
  return stream;
}

// exporting the plugin main function
module.exports = gulpVclPreprocessor;
