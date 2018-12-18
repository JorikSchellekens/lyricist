/**
 * Webpack configuration to build the project
 */

'use strict';

const { join } = require('path');

const webpack = require('webpack');
const buildFolder = join(__dirname, 'build');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    content: [
      'babel-polyfill',
      './js/content.js',
    ],
  },
  output: {
    path: buildFolder,
    filename: '[name].js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './icons/', to: `${buildFolder}/icons/` },
    ])
  ],
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
