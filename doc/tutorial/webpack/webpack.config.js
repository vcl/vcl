const path = require('path');
const vcl = require('@vcl/preprocessor');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    vcl: path.resolve(process.cwd(), 'vcl.sss'),
  },
  output: {
    path: path.join(process.cwd(), 'build'),
  },
  module: {
    rules: [
      {
        test: /\.sss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              parser: 'sugarss',
              plugins: vcl.createPostCSSPlugins()
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
