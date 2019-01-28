'use strict';

var path = require('path');
var webpack = require('webpack');
var MemoryFS = require('memory-fs');
var { Union } = require('unionfs');
var fs = require('fs');

// PostCSS plugins
var colors = require('postcss-color-function');
var npmimport = require('postcss-import');
var vars = require('postcss-css-variables');
var rucksack = require('rucksack-css');
var postcssPreset = require('postcss-preset-env');
var postcssNesting = require('postcss-nesting');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var npmImportResolve = require('./npm-import-resolve');


/**
 * Creates and return a list of postCSS plugins required for the VCL
 * @param {object} [opts] - postCSS plugin options.
 * @param {string} [opts.root=process.cwd()] - base directory
 * @param {string} [opts.theme="@vcl/theme"] - theme to use
 * @return Array of postCSS plugins
 */
function createPostCSSPlugins (opts = {}) {
  return [
    npmimport({
      root: opts.root || process.cwd(),
      resolve: (id, base, options) => {
        if (id === '@vcl/theme' && opts.theme) {
          id = opts.theme;
        }
        return npmImportResolve(id, base, options);
      },
      ...(opts.npm || {}),
    }),
    postcssNesting(),
    vars(), // CSS4 compatible variable suppot
    colors(), // W3C CSS4 Color functios
    postcssPreset(),
    rucksack()
  ];
}

/**
*  Creates a rule for .sss files usable in webpack
* @param {Object} [opts] - compiler options
* @param {string} [opts.root=process.cwd()] - base directory
* @param [opts.include] - rule includes
* @param [opts.exclude] - rule excludes
* @param {string} [opts.loader="extract"] - Top loader to handle the css output (extract, raw or style)
* @param {boolean} [opts.sourceMap=false] - Generate a source map
* @param {boolean} [opts.url=false] - Enable/Disable url() handling
* @param {string} [opts.theme="@vcl/theme"] - theme to use
*/
function createWebpackRule(opts = {}) {

  let loader;
  let extractCss = false;
  if (opts.loader === 'raw') {
    loader =  'raw-loader'
  } else if (opts.loader === 'style') {
    loader =  'style-loader'
  } else {
    extractCss = true;
    loader = MiniCssExtractPlugin.loader;
  }

  return {
    test: /\.sss$/,
    include: opts.include,
    exclude: opts.exclude,
    use: [
      loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          url: opts.url === false ? false : true
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          parser: 'sugarss',
          plugins: createPostCSSPlugins(opts),
          sourceMap: opts.sourceMap ? (!extractCss ? 'inline' : opts.sourceMap) : false
        }
      },
    ]
  };
}

/**
* Creates a webpack compiler
* @param {string} [inputFile] - Input file
* @param {string} [outputFile] - Output file
* @param {Object} [opts] - compiler options
* @param {string} [opts.root=process.cwd()] - base directory
* @param {boolean} [opts.sourceMap=false] - Generate a source map
* @param {boolean} [opts.url=true] - Enable/Disable url() handling
* @param {boolean} [opts.optimize=false] - Optimize css
* @param {string} [opts.theme="@vcl/theme"] - theme to use
*/
function createWebpackCompiler(inputFile, outputFile, opts = {}) {
  const root = opts.root || process.cwd();
  const outputFileDir = path.resolve(path.dirname(outputFile));
  const outputFileBase = path.basename(outputFile);

  const inputFileFull = path.resolve(root, inputFile);

  const config = {
    mode: 'none',
    devtool: opts.sourceMap ? 'source-map': undefined,
    entry: {
      'styles': inputFileFull
    },
    output: {
      path: outputFileDir
    },
    module: {
      rules: [
        createWebpackRule(opts),
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: outputFileBase
      }),
      ...(opts.optimize ? [new OptimizeCssAssetsPlugin] : []),
      // The following plugin blocks all non .css and .css.map files from the result
      // This is to avoid having pointless javascript files in the output folder
      (compiler) => {
        compiler.hooks.emit.tapAsync('DisableNonCssOutputWebpackPlugin', (compilation, callback) => {
          Object.keys(compilation.assets).forEach(asset => {
            if (!asset.endsWith('.css') && !asset.endsWith('.css.map')) {
              delete compilation.assets[asset];
            }
          });
          callback();
        });
      }
    ]
  };

  return webpack(config);
}

/**
* Converts a sss string into css
* @param {string} [sss] - sss style
* @param {Object} [opts] - compiler options
* @param {string} [opts.root=process.cwd()] - base directory
* @param {boolean} [opts.sourceMap=false] - Generate a source map
* @param {boolean=true} [opts.url=true] - Enable/Disable url() handling
* @param {boolean} [opts.optimize=false] - Optimize css
* @param {string} [opts.theme="@vcl/theme"] - theme to use
* @return {Promise} - Converted css
*/
function compileString(sss, opts = {}) {

  const root = opts.root || process.cwd();

  const src = path.resolve(root, '_tmp_vcl.sss');
  const dest = path.resolve(root, '_tmp_vcl.css');

  // Create a in-mem fs for input and output
  const mfs = new MemoryFS();

  // Create a union fs for input, output and resolved files
  const ufs = new Union().use(fs).use(mfs);

  // Write input to in-mem fs
  mfs.mkdirpSync(root);
  mfs.writeFileSync(src, sss);

  const compiler = createWebpackCompiler(src, dest, opts);

  // use the union fs for reading stuff
  compiler.inputFileSystem = ufs;
  compiler.resolvers.normal.fileSystem = ufs;
  compiler.resolvers.context.fileSystem = ufs;

  // use the in-mem fs to write stuff
  compiler.outputFileSystem = mfs;

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      compiler.purgeInputFileSystem();
      if (err) {
        reject(err);
      }
      if (stats.hasErrors()) {
        reject(stats.toJson({
          errors: true
        }));
      }
      resolve(stats.toJson());
    });
  }).then(() => {
    // After compiling is done, read from the in-mem fs
    try {
      return {
        css: mfs.readFileSync(dest).toString()
      };
    } catch (ex) {
      return Promise.reject(ex);
    }
  });
}

/**
* Converts a sss file into a css file
* @param {string} [inputFile] - input file
* @param {string} [outputFile] - output file
* @param {Object} [opts] - compiler options
* @param {string} [opts.watch=false] - watch mode
* @param {string} [opts.root=process.cwd()] - base directory
* @param {boolean} [opts.sourceMap=false] - Generate a source map
* @param {boolean=true} [opts.url=true] - Enable/Disable url() handling
* @param {boolean} [opts.optimize=false] - Optimize css
* @param {string} [opts.theme="@vcl/theme"] - theme to use
* @return {Promise} - Converted css
*/
function compileFile(inputFile, outputFile = 'vcl.css', opts = {}) {
  const compiler = createWebpackCompiler(inputFile, outputFile, opts);
  let lastHash;

  const handler = (err, stats) => {
    if (!opts.watch || err) {
      // Do not keep cache anymore
      compiler.purgeInputFileSystem();
    }

    if (err) {
      lastHash = null;
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      process.exit(1);
      return;
    }

    if (stats.hash !== lastHash) {
      lastHash = stats.hash;
      const statsString = stats.toString({
        colors: { level: 3, hasBasic: true, has256: true, has16m: true },
        cached: false,
        cachedAssets: false,
        exclude: [ 'node_modules' ],
        infoVerbosity: 'info'
      });
      if (statsString) {
        console.log(`${statsString}`);
      }
    }
    if (!opts.watch && stats.hasErrors()) {
      process.exitCode = 2;
    }
  }

  if (opts.watch) {
    return compiler.watch({
      aggregateTimeout: 300,
      poll: undefined
    }, handler);
  } else {
    compiler.run(handler);
  }
}

module.exports = compileString;
module.exports.compileFile = compileFile;
module.exports.createPostCSSPlugins = createPostCSSPlugins;
module.exports.createWebpackRule = createWebpackRule;
