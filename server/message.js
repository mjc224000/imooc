const Chat = require('./model').Chat;
var router = express.Router();
module.exports.message = function (server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
        socket.on('sendmsg', function (data) {
            const {from, to, msg} = data;
            const chatid = [from, to].sort().join('_');
            Chat.findOne({chatid}, function (err, instance) {
                if (instance) {
                    instance.content.push(msg)
                    instance.save();
                } else {
                    const ChatInstance=new Chat({chatid, from, to, content: [msg]});
                    ChatInstance.save();
                }
                io.emit(chatid,instance)
            })
        });
    });
}
router.use(cookieParser());
router.use(bodyParser.json());
router.use(function (req, res, next) {
    if (!req.cookies.Token) {
        return res.json({code: 0, errMsg: 'not auth'});
    }
    next();
})
module.exports.router=router.get('/getMsgList',function (req,res) {
    const {_id} =req.query;
    Chat.find({'$or':[{from:_id},{to:_id}]},function (err,instances) {
        if(!err){
            res.json({code:0,data:instances})
        }
    })
})


