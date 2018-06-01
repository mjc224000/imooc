var express = require('express');
 var getToken=require('./utils') .getToken;
var utils = require('utility');
var bodyParser = require('body-parser');
var AppUser = require('./model');
var router = express.Router();
// 该路由使用的中间件
router.use(bodyParser.json());
// 定义网站主页的路由
router.get('/', function (req, res) {
    res.json({'name': 'nmsl'});
})
//login
router.post('/login', function (req, res) {
    const {username, password} = req.body;
    const md5Password = utils.md5(password);
    AppUser.findOne({username}, function (err, instances) {
        if (err) {
            res.json({code: 1, msg: 'server error'});
        } else {
            var userPassword = instances.password;
            if (userPassword ===md5Password)
                res.json({code: 0, msg: "login success",Token:getToken()})
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
        var AppUserInstance = new AppUser({username, password: utils.md5(password), type});
        AppUserInstance.save(function (err, instance) {
            if (err)
                res.json({code: 1, msg: 'server error'})
            res.json({code: 0, msg: "register success"});
        });
    })
});
router.get('/all', function (req, res) {
    AppUser.find({}, function (err, instances) {
        res.json(instances);
    })

})
module.exports = router;