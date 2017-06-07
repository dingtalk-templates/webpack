/**
 * Created by xiangwenwen on 2017/2/8.
 */

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.weexDev.env.NODE_ENV)
}
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.weex.dev.conf.js');
var port = process.env.PORT || config.weexDev.port;
var app = express();
var compiler = webpack(webpackConfig);
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})
var uri = 'http://localhost:' + port;
console.log(uri);
app.use(devMiddleware);
var staticPath = path.posix.join(config.weexDev.assetsPublicPath, config.weexDev.assetsSubDirectory)
app.use(staticPath, express.static('./dist'))
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return;
  }
})
