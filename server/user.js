const utils = require('utility');
const express = require('express');
const getToken=require('./utils') .getToken;
const  cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const AppUser = require('./model');
const router = express.Router();
// 该路由使用的中间件
router.use(bodyParser.json());
router.use(cookieParser());
// 定义网站主页的路由
router.get('/', function (req, res) {
    res.json({'name': 'nmsl'});
})
//login
router.post('/login', function (req, res) {
    const {username, password} = req.body;
    const md5Password = utils.md5(password);
    //findone 的第二个字段是显示条件
    AppUser.findOne({username},{'password':0}, function (err, instance ){
        if (err) {
            res.json({code: 1, msg: 'server error'});
        } else {
            if(!instance){
                return res.json({code:1,msg:'wrong username or password'})
            }
            var userPassword = instance.password;
            if (userPassword ===md5Password);
            {  res.cookie('Token',getToken(),{ expires: new Date(Date.now() + 900000), httpOnly: true })
             return   res.json({code: 0, msg: "login success",data:instance,Token:getToken()})}
    }
    })

})

//register
router.post('/register', function (req, res) {
    const {username, password, type} = req.body;
    AppUser.find({username}, function (err, instances) {
        if (err) {
            res.json({code: 1, msg: 'server error'})
            return
        }
        if (instances.length) {
            res.json({code: 1, msg: 'the username already exists'});
            return
        }
        var AppUserInstance = new AppUser({username, password: utils.md5(password), type,avatar:''});
        AppUserInstance.save(function (err, instance) {
            if (err) {
                res.json({code: 1, msg: 'server error'})
            } else {
                res.json({code: 0, msg: "register success",data:instance});
            }

        });
    })
});
router.get('/all', function (req, res) {
    AppUser.find({}, function (err, instances) {
        res.json(instances);
    })

})
module.exports = router;