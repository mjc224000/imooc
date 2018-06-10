const Chat=require('./model').Chat;
const userRouter=require('./user');
const infoRouter=require('./info');
const express = require('express');
const utils=require('utility');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('sendmsg', function (data) {
 const {from ,to ,msg}=data;
 const chatid=[from,to].sort().join('_');
 Chat.create({chatid,from,to,content:msg},function (err,instance) {
     io.emit('boradcast',Object.assign({},instance))
 })
        io.emit('boradcast', data);
    });
});
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected', function (err, sus) {

})

app.use('/user',userRouter);
app.use('/info',infoRouter);
app.get('/',function (req,res) {
    res.send( utils.md5('aaaa'));
})
server.listen(9093);