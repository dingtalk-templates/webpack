var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.base.weex.conf.js');
var merge = require('webpack-merge');
var webacpkConfig = require('../config');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(webacpkConfig.weexDev.env.NODE_ENV)
}
var env = process.env.NODE_ENV;

if (env !== 'production'){
  baseWebpackConfig.output.filename = '[name]-watch.js';
}

module.exports = merge(baseWebpackConfig,{
  watch: true,
  plugins: [
    new webpack.BannerPlugin({
     raw: true ,
     banner: '// { "framework": "Vue" }\n'
    })
  ]
});
