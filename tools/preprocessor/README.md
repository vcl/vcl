# [VCL](https://vcl.github.io/) preprocessor

[![Build Status](http://img.shields.io/travis/vcl/preprocessor.svg?style=flat)](https://travis-ci.org/vcl/preprocessor)
[![Coverage Status](https://coveralls.io/repos/vcl/preprocessor/badge.svg?branch=master)](https://coveralls.io/r/vcl/preprocessor?branch=master)

The VCL preprocessor allows to create builds from NPM based CSS modules.
It is based on the [postcss](https://github.com/postcss/postcss)
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
  --direct-input             waits for input from stdin
  --include-dev              include dev dependencies of module          [default: true]
  --hoverSelectorPrefix, -p  specify a hover selector prefix, use '.vclHoverSupport' if no argument was provided

Examples:
  vcl-preprocessor index.styl dist/compiled.css     Compile index.styl and output to
                                                    dist/compiled.css
  cat index.styl | vcl-preprocessor > compiled.css  Compile index.styl and pipe
                                                    output to compiled.css
  vcl-preprocessor ./package.json > compiled.css    Fetch the package dependencies
                                                    and compile everything to
                                                    compiled.css
```
The VCL CLI will create the destination directory if it does not exist.

### API

```js
var vcl = require('@vcl/preprocessor');

// Signature
var process = vcl(css, opts);

// will return an array of postCSS plugins
var process = vcl.createPostCSSPlugins(opts);
```

// will return promise on the compiled css
var process = vcl('body\n  color: blue');
process.then(result => result.css);

// will process a package including its dependencies
// package.json needs to have a `style` property pointing to the entry styl file
var process = vcl.package('./my-page/package.json');
process.then(result => result.css);
```

This function returns the generated CSS code as string that
can be written to a file for example.

#### Options

- `npm.root` [`process.cwd()`] base directory for file based imports.
- `namespaceOptions` [none] name spacing of all CSS by applying class to elements matching the selector: `{ selector: '.gmh', class: 'gmh' }`.
- `useMq4HoverShim` [`false`] whether the MQ4 hover shim shall be used.
- `mq4HoverShimOptions` [`{ shimPrefixClass: '.vclHoverSupport' }`] prefix class name for MQ4 hover shim.

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
- Namespacing via [postcss-add-namespace](https://github.com/GarthDB/postcss-add-namespace).
- Media queries level 4 shim prevents unwanted hover behavior on touch devices via [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim).
- Next gen CSS features via [postcss-preset-env](https://preset-env.cssdb.org/).
