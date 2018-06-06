var express = require('express');
var getToken = require('./utils').getToken;
var utils = require('utility');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var AppUser = require('./model');
var _User = require('./utils')._User;
var router = express.Router();
// 该路由使用的中间件
router.use(cookieParser());
router.use(bodyParser.json());
router.use(function (req, res, next) {
    if (req.cookies.Token !== getToken()) {
        return res.json({code: 0, errMsg: 'not auth'});
    }
    next();
})

router.get('/userUpdate', function (req, res) {
    const {position, positionDesc, company, salary, avatar,resume} = req.query;
    AppUser.update({username: _User().username},
        {position, positionDesc, company, salary, avatar,resume},
        function (err) {
            if (err) {
                return res.json({code: 1, errMsg: 'server error'})
            } else {
                const {salary, company, position, positionDesc, avatar, username,resume} = req.query;
                return res.json({code: 0, data: {salary, company, position, positionDesc, avatar, username}})
            }
        })
})
router.get('/userInfo', function (req, res) {
    const _id=req.query['_id'];
    AppUser.findOne({_id},function (err,instance) {
        if(err){
            return res.json({code:1,errMsg:'error'});
        }else {
           return res.json({code:0,data:instance})
        }
    })

    })

module.exports = router;