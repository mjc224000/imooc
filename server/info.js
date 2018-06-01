var express = require('express');
var getToken=require('./utils') .getToken;
var utils = require('utility');
var bodyParser = require('body-parser');
var  cookieParser = require('cookie-parser');
var AppUser = require('./model');
var router = express.Router();
// 该路由使用的中间件
router.use(cookieParser());
router.use(bodyParser.json());
// 定义网站主页的路由
router.get('/boss', function (req, res) {
    console.dir(req.cookies)
    res.end('cookies get ok')
})
router.get('/',function (req,res) {
    res.cookie('resc', '设置到cookie里的值', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.end('cookies set ok')

})
//login

module.exports = router;