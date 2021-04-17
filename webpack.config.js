const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const typeScript = require('./webpack/typeScript.js');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};
const common = merge([
  {
    entry: {
      index: './src/index.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname + '/dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './demo/demo.pug',
      }),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
    ],
  },
  typeScript(),
  fonts(),
  pug(),
  images(),
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([common, extractCSS, css()]);
  }
  if (env === 'development') {
    return merge([common, devserver(), sass(), css()]);
  }
};
