const userRouter=require('./user');
const infoRouter=require('./info');
const express = require('express');
const utils=require('utility');
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(9093);
io.on('connection', function (socket) {
    console.log(1);
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
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
