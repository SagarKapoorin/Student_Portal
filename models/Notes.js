const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Notes=new Schema({
    Subject:{
        type:String,
        required:true,
    },
    content:{
        type:String,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model('Notes', Notes);