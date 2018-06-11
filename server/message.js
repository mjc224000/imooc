const Chat=require('./model').Chat;
module.exports = function (server) {
    const io = require('socket.io')(server);
    io.on('connection', function (socket) {
        socket.on('sendmsg', function (data) {
            let msgInstance=false;
            const {from, to, msg} = data;
            const chatid = [from, to].sort().join('_');
            Chat.findOne({chatid},function (err,instance) {
                if(instance.length){
                    msgInstance=instance
                }
            })
            if(msgInstance){
                
            }else {
                Chat.create({chatid, from, to, content: msg}, function (err, instance) {
                    io.emit('boradcast', Object.assign({}, instance))
                })
            }

        });
    });
}



