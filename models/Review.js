const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review=new Schema({
    Rating:{
    type:Number,
    required:true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    comment:{
        type:String,
    }
})
module.exports = mongoose.model('Review', Review);