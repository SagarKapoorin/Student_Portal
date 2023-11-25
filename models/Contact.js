const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Contact=new Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    Message:{
        type:String,
        required:true,
    },
    FindUs:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('Contact', Contact);