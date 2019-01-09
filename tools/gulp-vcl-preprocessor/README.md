# [VCL](https://vcl.github.io/) gulp-vcl-preprocessor

[![Build Status](http://img.shields.io/travis/vcl/gulp-vcl-preprocessor.svg?style=flat)](https://travis-ci.org/vcl/gulp-vcl-preprocessor)

The [VCL preprocessor](https://github.com/vcl/vcl/tools/gulp-vcl-preprocessor)
as a Gulp task.

## Usage

```js
var vcl = require('@vcl/gulp-vcl-preprocessor');

gulp.task('css', function(){
  gulp.src('app/vcl/*.styl')
    .pipe(vcl({
      // optional options, get passed to vcl-preprocessor
    }))
    .pipe(gulp.dest('dist/css'));
});
```

## Options

### `output`

Specifies the output file. Defaults to the input file name plus the `.css`
extension. If the `package` is set to true the output will default to
`style.css`.

Example:

* `index.styl` → `index.css`
* `package.json` → `style.css`

### `package`

Pre-process a package instead of a single file. This fetches all dependencies
and includes them in the final build.

The `includeDevDependencies` property that gets passed to the preprocessor can
be quite useful when processing a package in development. It will include the
dev dependencies as well as the normal ones.

Example:

```js
gulp.task('css', function(){
  gulp.src('./package.json')
    .pipe(vcl({
      package: true, // parses input as package.json instead of trying to pre-process
      output: 'main.css', // output will be written to dist/css/main.css
      includeDevDependencies: true // gets passed to the vcl-preprocessor
    }))
    //.pipe(cssmin())
    .pipe(gulp.dest('dist/css'));
});
```
