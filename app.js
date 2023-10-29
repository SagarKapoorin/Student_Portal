const express=require('express');   //require express
const app=express();                // selecting out app out of express
const methodoverride=require('method-override'); //for overrinding post and get
app.use(methodoverride("_method"));
const mongoose=require('mongoose');
const ejsmate=require("ejs-mate");
//const expresserror=require("./expresserror");
//const router=require("./routes/listing.js");
//const reviewrouter=require("./routes/review.js");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
//const User=require("./models/User.js");
//const userrouter=require("./routes/user.js");
app.engine('ejs', ejsmate);
main()
    .then(()=>{
        console.log("Successful")
    })
    .catch((err)=>{
        console.log("Failure  Reason: ",err);
    });
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/student_portal');
} 

app.use(express.urlencoded({ extended:true })); //used during geting data from  post body
app.set("view engine","ejs");   //intialising views folder for ejs files
const path=require("path");
app.listen("8080",(req,res)=>{     //started listening connections
    console.log("Server is listening to 8080");
});
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public"))); 
app.get("/",(req,res)=>{
    res.send("Hello");
})