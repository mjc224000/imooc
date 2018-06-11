const Chat = require('./model').Chat;
var express=require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var router = express.Router();
router.use(cookieParser());
router.use(bodyParser.json());
router.use(function (req, res, next) {
    if (!req.cookies.Token) {
        return res.json({code: 0, errMsg: 'not auth'});
    }
    next();
})
module.exports.message = function (server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
        console.log(1);
        socket.on('sendmsg', function (data) {
            const {from, to, msg} = data;
            const chatid = [from, to].sort().join('_');
            const ChatInstance=new Chat({chatid, from, to, content: msg});
            ChatInstance.save();
            io.emit(chatid,msg)
        });
    });
}
module.exports.router=router.get('/getMsgList',function (req,res) {
    const {_id} =req.query;
    Chat.find({'$or':[{from:_id},{to:_id}]},function (err,instances) {
        if(!err){
            res.json({code:0,data:instances})
        }
    })
})

router.get('/allMsg',function (req,res) {
    Chat.find({},function (err,instances) {
        res.json(instances);
    })
})
