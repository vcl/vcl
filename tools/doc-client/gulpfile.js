'use strict';

var gulp = require('gulp');

var vcl = require('@vcl/gulp-vcl-preprocessor');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
  return gulp.src('./main.styl')
    .pipe(vcl({
      output: 'vcl.css'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 1337
    }));
});
