var mongoose = require("mongoose");
var db = mongoose.connect('mongodb://localhost:27017');
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    type:{type:String,required:true},
    company:{type:String,required:false},
    avatar:{type:String},
    salary:{type:String},
    position:{type:String},
    positionDesc:{type:String},
    resume:{type:String}
});
var chatSchema=new Schema({
    chatid:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    read: {type:Boolean,default:false},
    content:{type:Array,required:true,default:[]},
    create_time:{type:Number,default:new Date().getTime()},
})
const AppUser=mongoose.model('AppUser',userSchema);
const Chat=mongoose.model('Chat',chatSchema);
module.exports.AppUser=AppUser;
module.exports.Chat=Chat;