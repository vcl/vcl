# [VCL](https://vcl.github.io/) preprocessor

[![Build Status](http://img.shields.io/travis/vcl/preprocessor.svg?style=flat)](https://travis-ci.org/vcl/preprocessor)
[![Coverage Status](https://coveralls.io/repos/vcl/preprocessor/badge.svg?branch=master)](https://coveralls.io/r/vcl/preprocessor?branch=master)

The VCL preprocessor allows to create builds from NPM based CSS modules.
It is based on webpack and the [postcss](https://github.com/postcss/postcss)
processor framework.

## Installation

```sh
$ npm install -g @vcl/preprocessor
```

## Usage

### Command Line

```sh
Usage: vcl-preprocessor <input> [output]

Options:
  --version, -v              Show version number
  --help, -h                 Show help
  --watch, -w                watches the input file for changes
  --import-root, -i          base directory for file based imports
  --optimize                 optimize css
  --theme                    use specified theme instead of "@vcl/theme"
  --source-map               generate source maps

Examples:
  vcl-preprocessor index.sss dist/compiled.css     Compile index.sss and output to
                                                    dist/compiled.css
```
The VCL CLI will create the destination directory if it does not exist.

### API

```js
var vcl = require('@vcl/preprocessor');

// Will compile the input file and store the result in the output file
vcl(inputFile, outputFile, opts).then(({css}) => {
  ...
});

// Will compile the input file and store the result in the output file
// Also recompiles the output file on changes
vcl.compileFile(inputFile, outputFile, opts);

// Will return an array of postCSS plugins
var plugins = vcl.createPostCSSPlugins(opts);

// Will create a webpack rule for .sss files
var rule = vcl.createWebpackSSSRule(opts);
```

This function returns the generated CSS code as string that
can be written to a file for example.

#### Options

- `root` [`process.cwd()`] base directory for file based imports.
- `sourceMap` [false] creates a source map
- `optimize` [false] optimizes css
- `watch` [false] enables watch mode
- `include` [] includes for the webpack rule
- `exclude` [] excludes for the webpack rule

## Entry CSS File

The following ways to import CSS files are supported:

```css
@import "node-module-name";
@import "node-module-name/file";
@import "./local-file-relative-to-this.css";
```

## Features

- Node module and local file imports via [postcss-import](https://github.com/postcss/postcss-import).
- CSS level 4 variables syntax [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables).
- Support for color functions such as `rgba()` via [postcss-color-function](https://github.com/postcss/postcss-color-function).
- Support for CSS level 4 proposed `color()` function via [postcss-color-function](https://github.com/postcss/postcss-color-function).
- Support for `lighten|darken({color}, {amount}%)` function via [rucksack-css](https://www.rucksackcss.org/).
- Inheritance support via [rucksack-css](https://www.rucksackcss.org/).
- Custom media to do things like `@media (--narrow-window)` via [rucksack-css](https://www.rucksackcss.org/).
- Easing functions via [rucksack-css](https://www.rucksackcss.org/).
- Simple `clear: fix` construct via [rucksack-css](https://www.rucksackcss.org/).
- Media queries level 4 shim prevents unwanted hover behavior on touch devices via [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim).
- Next gen CSS features via [postcss-preset-env](https://preset-env.cssdb.org/).
