# [VCL](https://vcl.github.io/) preprocessor

The VCL preprocessor allows to create builds from NPM based CSS modules.
It is based on webpack and the [postcss](https://github.com/postcss/postcss)
processor framework.

## Installation

```sh
$ npm install @vcl/preprocessor
```

## Usage

### Command Line

```sh
Usage: vcl-preprocessor <input> <output>
```

Options:
  --version, -v              Show version number
  --help, -h                 Show help
  --watch, -w                watches the input file for changes
  --import-root, -i          base directory for file based imports
  --optimize, o              optimize css
  --source-map, -s           generate source maps
  --source-map-inline, -si   generate source maps

Examples:
```sh
vcl-preprocessor index.sss compiled.css     # Compile index.sss and output to compiled.css
```
The VCL CLI will create the destination directory if it does not exist.

```sh
echo "a\n  color: green" | vcl-preprocessor # Pipe string through preprocessor
```

### API

```js
var vcl = require('@vcl/preprocessor');

// Will compile the input file and store the result in the output file
vcl(inputFile, outputFile, opts).then((result) => {
  result.css; // compiled css
});

// Will compile the input file and store the result in the output file
// Also recompiles the output file on changes
vcl.compileFile(inputFile, outputFile, opts).then(...);

// Will return an array of postCSS plugins
var plugins = vcl.createPostCSSPlugins(opts);
```
#### Options

- `root` [`process.cwd()`] base directory for file based imports.
- `sourceMap` [false] creates a source map
- `optimize` [false] optimizes css
- `url` [true] follows urls

## Entry CSS File

The following ways to import CSS files are supported:

```css
@import "node-module-name";
@import "node-module-name/file";
@import "./local-file-relative-to-this.css";
```

## Features

- Node module and local file imports via [postcss-import](https://github.com/postcss/postcss-import).
- Support for CSS level 4 proposed `color()` function via [postcss-color-function](https://github.com/postcss/postcss-color-function).
- CSS level 4 variables syntax [postcss-css-variables](https://github.com/MadLittleMods/postcss-css-variables).
- Next gen CSS features via [postcss-preset-env](https://preset-env.cssdb.org/).
- Support for nest style rules, following the CSS Nesting specification [postcss-nesting](https://github.com/jonathantneal/postcss-nesting/).
- Support for color functions such as `rgba()` via [postcss-hexrgba](https://github.com/seaneking/postcss-hexrgba).
- Simple `clear: fix` construct via [postcss-clearfix](https://github.com/seaneking/postcss-clearfix/).
