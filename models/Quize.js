const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Quize=new Schema({
    Total_question:{
    type:Number,
    required:true,
    },
    Correct:{
        type:Number,
        required:true,
        default:0,
    },
    Highscore:{
        type:Number,
        required:true,
        default:0,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('Quize', Quize);