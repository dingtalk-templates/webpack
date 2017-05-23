var router = require('koa-router')();

/*
* 这是一个例子，分别展示了post请求下的mock和get请求下的mock
*/

router.post('/weex/post', function *(next) {
    this.body = {
        success: true
    };
});

router.get('/weex/get', function *(next) {
    this.body = {
        success: 1
    };
});

module.exports = router;
