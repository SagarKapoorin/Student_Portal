const express=require('express');   //require express
const app=express();                // selecting out app out of express
const methodoverride=require('method-override'); //for overrinding post and get
app.use(methodoverride("_method"));
const mongoose=require('mongoose');
const ejsmate=require("ejs-mate");
const Quiz_model=require("./models/Quize.js");
const Note_model=require("./models/Notes.js");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
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
app.use(express.json());
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public"))); 
app.get("/",(req,res)=>{
    res.render("Layout/boilerplate.ejs");
})
app.get("/calculator",(req,res)=>{
    res.render("Components/Calculator/calculator.ejs");
})
app.get("/Notes",(req,res)=>{
    res.render("Components/Notes/Notes.ejs");
})
app.get("/dict",(req,res)=>{
    res.render("Components/Dictionary/dictionary.ejs");
})
app.get("/weather",(req,res)=>{
    res.render("Components/Weather/weather.ejs");
})
app.get("/Clock",(req,res)=>{
    res.render("Components/Clock/Clock.ejs");
})
app.get("/Quiz",(req,res)=>{
    res.render("Quiz/Quiz.ejs");
})
app.get("/Note",(req,res)=>{
    res.render("Notes/Notes.ejs");
})
app.post("/save-quiz",async(req,res)=>{
  const quizInstance=new Quiz_model({Total_question:req.body.Total_question,Correct:req.body.Correct})
    const savedQuiz = await quizInstance.save();
    // console.log('Quiz created successfully:', savedQuiz);
})
app.post("/save-Notes",async(req,res)=>{
    const NoteInstance=new Note_model({Subject:req.body.Subject ,content:req.body.content});
    const savedNote = await NoteInstance.save();
    //  console.log('Note created successfully:', savedNote);
})