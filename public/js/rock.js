// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");
  scoreUpdate=document.getElementById("Score");
  Highscore=document.getElementById("Highscore");
let score=0;
// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    result.textContent = "Wait...";

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "src/stone.svg",
        "src/paper.svg",
        "src/scissors.svg"
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];
      console.log(cpuValue+" "+userValue);
      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "User"
      };
      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];
      console.log(outComeValue);
      // Display the result
      if(userValue===cpuValue){
        result.textContent ="Match Draw";
        score++;
        scoreUpdate.innerHTML=score;
      }else{
        result.textContent =`${outComeValue} Won!!`;
        if(outComeValue==="Computer"){
            const rockdata={
                genre:"Rock-Paper-Scissor",
                score:score,
            }
            fetch('/rock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rockdata),
            })
            setTimeout(()=>{ 
            location.reload();
            },2000);
        }else{
            console.log("No");
            score++;
            scoreUpdate.innerHTML=score;
            console.log(scoreUpdate.innerHTML)
        }
      }
    }, 2500);
  });
});