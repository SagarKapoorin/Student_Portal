const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Games=new Schema({
    genre:{
        type:String,
        required:true,
        default:"snake"
    },
    score:{
        type:Number,
        required:true,
        default:0,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('Games', Games);