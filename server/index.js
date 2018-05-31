const userRouter=require('./user')
const express = require('express');
const app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected', function (err, sus) {

})
app.use('/user',userRouter)
app.get('/data', function (req, res) {
    console.log(1);
    res.json({'code': 1});

})


app.listen(9093, function () {
    console.log('at 9093')
})