const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Notes=require("./Notes.js");
const Review=require("./Review.js");
const Quize=require("./Quize.js");
const passportLocalMongoose = require('passport-local-mongoose');

const Userschema = new Schema({
    email:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

Userschema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', Userschema);