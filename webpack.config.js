const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.join(__dirname, 'src'),
  entry: 'index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {},
};

module.exports = config;
