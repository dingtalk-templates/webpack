var serve = require('koa-static');
var router = require('../mock/router.js');
var path = require('path');
var koa = require('koa');
var app = koa();

function getIPAdress() {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4') {
                return alias.address;
            }
        }
    }
}

app.use(serve('.'));
app.use(router.routes());
app.use(router.allowedMethods());
var server = require('http').createServer(app.callback());
server.listen(8999, function () {
    console.log('Http server running on http://%s:%s', getIPAdress(), server.address().port);
});
