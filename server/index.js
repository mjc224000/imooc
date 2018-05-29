const userRouter=require('./user')
const express = require('express');
const app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
mongoose.connection.on('connected', function (err, sus) {

})

const _User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))

app.use('/user',userRouter)
app.get('/data', function (req, res) {
    _User.find({},function (err,doc) {
        if(err){return}
        res.header('Access-Control-Allow-Origin', '*');
        console.log(1);
        return res.json({
            "start": "react-scripts start",
                "build": "react-scripts build",
                "test": "react-scripts test --env=jsdom",
                "eject": "react-scripts eject"
        });
    })

})
app.get('/', function (req, res) {
    res.send('<h1>nmssslcd</h1>')
})

app.listen(9093, function () {
    console.log('at 9093')
})