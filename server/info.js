

var express = require('express');
var getToken = require('./utils').getToken;
var utils = require('utility');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var AppUser = require('./model').AppUser;
var _User = require('./utils')._User;
var router = express.Router();
// 该路由使用的中间件
router.use(cookieParser());
router.use(bodyParser.json());
router.use(function (req, res, next) {
    if (!req.cookies.Token) {
        return res.json({code: 0, errMsg: 'not auth'});
    }
    next();
})
router.get('/List', function (req, res) {
    const { type } = req.query;
    console.log(type);
    AppUser.find({ type }, function (err, instances) {
        if (err) {
            return res.json({code: 1, errMsg: 'server error'})
        } else {
            res.json({code: 0, data: instances})
        }
    })
})
router.get('/getmsglist',function (req,res) {
    const user=req.cookies.Token;
 //   Chat.find({'$or':[{from:user,to:user}]})
    Chat.find({},function (err,doc) {
        if(!err){
            res.json({code:0,msgs:doc})
        }
    })
})
router.get('/userUpdate', function (req, res) {
    const {position, positionDesc, company, salary, avatar, resume, _id} = req.query;
    console.log(_id);
    AppUser.update({_id},
        {position, positionDesc, company, salary, avatar, resume},
        function (err) {
            if (err) {
                return res.json({code: 1, errMsg: 'server error'})
            } else {
                return res.json({code: 0, data: {salary, company, position, positionDesc, avatar}})
            }
        })
})
router.get('/userInfo', function (req, res) {
    const _id = req.query['_id'];
    AppUser.findOne({ _id }, function (err, instance) {
        if (err) {
            return res.json({code: 1, errMsg: 'error'});
        } else {

            return res.json({code: 0, data: instance})
        }
    })

})

module.exports = router;