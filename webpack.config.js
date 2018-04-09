/**
 * Webpack configuration to build the project
 */

'use strict';

const { join } = require('path');

const webpack = require('webpack');
const buildFolder = join(__dirname, 'build');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    'src': './src/index.js',
  },
  output: {
    path: buildFolder,
    filename: '[name].js',
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['.webpack.js', '.web.js', '.js', '.json']
  },
  module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      ]
  },
  node: {
    fs: 'empty'
  }
};
