const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Notes=require("./Notes.js");
const Game=require("./Game.js");
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
    Notes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Notes',
    }],
    Quize:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Quize',
    }],
    Games:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Games',
    }]
});
Userschema.post("findOneAndDelete",async(user)=>{
    if(user){
        await Notes.deleteMany({_id:{$in: user.Notes}});
        await Quize.deleteOne({_id:{$in: user.Quize}});
        await Game.deleteMany({_id:{$in: user.Game}});
    }
})
Userschema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', Userschema);