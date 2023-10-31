const mongoose=require("mongoose");
const Notes=require("../models/Notes.js");
const Review=require("../models/Review.js");
const Quize=require("../models/Quize.js");
const User=require("../models/User.js");
main()
    .then(()=>{
        console.log("Successfull")
    })
    .catch((err)=>{
        console.log("Failure  Reason: ",err);
    });
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/student_portal');
} 
const fakereview=async()=>{
    let result=await Review.insertMany([
        {
            Rating: 4,
            comment: 'This is a review comment.',
          },
          {
            Rating: 3,
            comment: 'This is a review comment.',
          },
    ]);
    const insertedIds = [];

    for (let i = 0; i < result.length; i++) {
      insertedIds.push(result[i]._id);
    }
    
    return insertedIds;
}
const fakenotes=async()=>{
    let result=await Notes.insertMany([
        {
            Subject: 'note 1',
            content: 'This is a note.',
          },
          {
            Subject: 'note 2',
            content: 'This is a note.',
          },
    ]);
    const insertedIds = [];

    for (let i = 0; i < result.length; i++) {
      insertedIds.push(result[i]._id);
    }
    
    return insertedIds;
}
const fakequiz=async()=>{
    let result=await Quize.create({
        Total_question:4,
        Correct:2,
        Highscore:3,
    });
     return result._id;
};
const fakeuser = async () => {

    const notesIds = await fakenotes();
    const quizId = await fakequiz();
    const reviewIds = await fakereview();
  
    let user = await User.create({
      username: "Sagar",
      email: "sagar@gmail.com",
      Notes: notesIds,
      Quize: quizId,
      Review: reviewIds,
    });
    console.log(user);
  };
 // fakeuser();

  