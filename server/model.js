var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    type:{type:String,required:true},
    company:{type:String,required:false},
    avatar:{type:String}
},{chat:Array})
AppUser=mongoose.model('AppUser',userSchema);
module.exports=AppUser;
