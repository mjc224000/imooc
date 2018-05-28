const express = require('express');
const app = express();
var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
console.log(db);
mongoose.connection.on('connected', function (err, sus) {
    console.log(111);
})
const _User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))


app.get('/data', function (req, res) {
    _User.find({},function (err,doc) {
        if(err){return}
        return res.json(doc);
    })

})
app.get('/', function (req, res) {
    res.send('<h1>nmssslcd</h1>')
})
_User.remove({"age":22},function (err,doc) {
    console.log(doc);
});

app.listen(9093, function () {
    console.log('at 9093')
})