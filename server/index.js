const message = require('./message').message;
const messageRouter=require('./message').router
const userRouter = require('./user');
const infoRouter = require('./info');
const express = require('express');
const utils = require('utility');
const app = express();
var server = require('http').Server(app);
message(server);
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected', function (err, sus) {

})
app.use('/msg',messageRouter)
app.use('/user', userRouter);
app.use('/info', infoRouter);
app.get('/', function (req, res) {
    res.send(utils.md5('aaaa'));
})
server.listen(9093);