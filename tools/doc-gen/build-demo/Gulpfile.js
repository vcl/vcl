/* jshint node:true */
'use strict';
var fs = require('fs');
var gulp = require('gulp');
var pack = require('./package.json');
var tasks = require('@vcl/build-demo');

var vcl = require('@vcl/gulp-vcl-preprocessor');

var styles = [];
var stylesFilename = 'demo/styles.json';

if (fs.existsSync(stylesFilename)) {
  try {
    styles = JSON.parse(fs.readFileSync(stylesFilename, 'utf-8'));
  } catch (err) {
    console.log('demo/styles.json parse error', err);
  }
}

gulp.task('css', function() {
  gulp.src('./package.json')
    .pipe(vcl({
      package: true,
      includeDevDependencies: true,
      output: 'index.css'
     }))
    .pipe(tasks.connect.reload())
    .pipe(gulp.dest('./build'));
});

gulp.task('server', ['css', 'html'], tasks.server());

gulp.task('html', function() {
  gulp.src('demo/*.html')
    .pipe(tasks.wrapHtml({title: pack.name, styles: styles}))
    .pipe(tasks.connect.reload())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('./index.styl', ['css']);
  gulp.watch('./demo/*.html', ['html']);
});

gulp.task('dev', ['server', 'watch']);
