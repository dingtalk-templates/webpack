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
  baseWebpackConfig.output.publicPath = webacpkConfig.weexDev.assetsPublicPath;
  baseWebpackConfig.output.filename = '[name]-dev.js';
}

module.exports = merge(baseWebpackConfig,{
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.BannerPlugin({
     raw: true ,
     banner: '// { "framework": "Vue" }\n'
    })
  ]
});
