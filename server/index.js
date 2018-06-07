const userRouter=require('./user');
const infoRouter=require('./info');
const express = require('express');
const utils=require('utility');
const app = express();
var mongoose = require("mongoose");

var db = mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected', function (err, sus) {

})

app.use('/user',userRouter);
app.use('/info',infoRouter);
app.get('/',function (req,res) {

    res.send( utils.md5('aaaa'));
})

app.listen(9093, function () {
    console.log('at 9093')
})