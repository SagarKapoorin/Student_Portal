const express=require('express');   //require express
const app=express();                // selecting out app out of express
const methodoverride=require('method-override'); //for overrinding post and get
app.use(methodoverride("_method"));
const mongoose=require('mongoose');
const ejsmate=require("ejs-mate");
const Quiz_model=require("./models/Quize.js");
const Note_model=require("./models/Notes.js");
const Contact_model=require("./models/Contact.js");
const expresserror=require("./expresserror.js")
const User_model=require("./models/User.js")
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
// wrap ansyn try-catch  block won't catch asynchronous errors that occur during the rendering process. 
const wrapAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
app.get("/calculator", wrapAsync(async (req, res, next) => {
    res.render("Components/Calculator/calculator.ejs");
}));

app.get("/Notes", wrapAsync(async (req, res, next) => {
    res.render("Components/Notes/Notes.ejs");
}));

app.get("/dict", wrapAsync(async (req, res, next) => {
    res.render("Components/Dictionary/dictionary.ejs");
}));

app.get("/weather", wrapAsync(async (req, res, next) => {
    res.render("Components/Weather/weather.ejs");
}));

app.get("/Clock", wrapAsync(async (req, res, next) => {
    res.render("Components/Clock/Clock.ejs");
}));

app.get("/Quiz", wrapAsync(async (req, res, next) => {
    res.render("Quiz/Quiz.ejs");
}));

app.get("/Note", wrapAsync(async (req, res, next) => {
    res.render("Notes/Notes.ejs");
}));

app.post("/save-quiz", wrapAsync(async (req, res, next) => {
    const quizInstance = new Quiz_model({ Total_question: req.body.Total_question, Correct: req.body.Correct });
    const savedQuiz = await quizInstance.save();
    // console.log('Quiz created successfully:', savedQuiz);
}));
// problem
app.post("/save-Notes", wrapAsync(async (req, res, next) => {
    const NoteInstance = new Note_model({ Subject: req.body.Subject, content: req.body.content });
    const savedNote = await NoteInstance.save();
    //  console.log('Notes created successfully:', savedNote);

}));

app.get("/Contact", wrapAsync(async (req, res, next) => {
    res.render("Contact-Us/Contact.ejs");
}));
app.post("/Contact",async(req,res,next)=>{
    try{
    const ContactInstance=new Contact_model({Name:req.body.Name ,Email:req.body.Email,Message:req.body.Message,FindUs:req.body.FindUs});
    const savedContact = await ContactInstance.save();
    //  console.log('COntact created successfully:', savedContact);
    setTimeout(()=>{
        res.redirect("/Contact");
    },3000); 
}catch(err){
    next(new expresserror(500,"Data not sent try again"))
}
});
app.get("*",(req,res,next)=>{
    next(new expresserror(404,"Page Not Found"))
})
// Error Handle Middleware
app.use((err, req, res, next) => {
console.log("error");
    const status = err.status || 500; // Default to 500 if status is undefined
    res.status(status).redirect("/Contact");
});
