var webpack = require('webpack');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var config = {
  entry: {
    'weex-bundle': './src/platforms/weex/weex.entry.js?entry=true'
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.vue(\?[^?]+)?$/,
        loaders: ['weex-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
