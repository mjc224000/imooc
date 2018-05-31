var express = require('express');
var AppUser = require('./model');
var router = express.Router();
// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 定义网站主页的路由
router.get('/', function (req, res) {
    res.json({'name': 'nmsl'});
})
router.get('/info', function (req, res) {
    res.json({'code': 1});
});

// 定义 about 页面的路由
router.get('/about', function (req, res) {
    res.send('About birds');
});
router.post('/register', function (req, res) {
    res.json({'nmsl':'nmsl'})
})
module.exports = router;