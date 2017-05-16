/**
 * Created by xiangwenwen on 2017/2/8.
 */

// { "framework": "Vue" }

var webpack = require('webpack');
var path = require('path');
var webacpkConfig = require('../config');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.weex.env.NODE_ENV)
}
var env = process.env.NODE_ENV;
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var watch = false;
var plugins = [];
var filename = '[name].js';
if (env === 'production'){
  plugins = [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
} else {
  if (env === 'watch'){
    watch = true;
    filename = '[name]-watch.js';
  } else {
    filename = '[name]-dev.js';
    plugins = [
      new FriendlyErrorsPlugin()
    ];
  }
}

plugins.push(
  new webpack.BannerPlugin({
   raw: true ,
   banner: '// { "framework": "Vue" }\n'
  })
);

var config = {
  entry: {
    'weex-bundle': './src/platforms/weex/weex.entry.js?entry=true'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: filename
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
  },
  plugins: plugins,
  resolve: {
    alias: {}
  },
  watch: watch
};

if (env !== 'production'){
  config.output.publicPath = webacpkConfig.weex.assetsPublicPath;
}

module.exports = config;
