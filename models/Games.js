const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Games=new Schema({
    N:{
        type:String,
        required:true,
    },
    Email:{
        type: String,
        required: true,
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
module.exports = mongoose.model('Games', Games);