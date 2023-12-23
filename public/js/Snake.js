const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const controls = document.querySelectorAll(".controls i");
// funtion needs as foloows:-
// funtion to update food
// funtion to end game+start game need to check when key pressed
// funtion tochange velocity/dirction of snake
// funtion to check collisions(wals+himself)
// funtion to check ate food
// futnion to keep check of increase height of snake
let gameOver = false;
let foodX, foodY; //postion of food
let snakeX = 5, snakeY = 5; //positon of snake initailly
let velocityX = 0, velocityY = 0; //necessary to control movement of snake up,,doun
let snakeBody = [];
let stop_game;
let score = 0;
// 1.funtino
const updateFoodPosition = () => {
    //  since grid is of 30X 30(check css)
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
// 2.end only
const handleGameOver = () => {
    // Clearing the timer and reloading the page on game over
    const gameData={
        genre:"snake",
        score:score,
    };
    fetch('/snake', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
    })
    clearInterval(stop_game);
    alert("Game Over! Press OK to replay...");
    location.reload();
}
// 3.snake velocity.directn
const changeDirection = (e) => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
// intialize game
const initGame = () => {
    // check if gameOver is false or true
    if(gameOver) return handleGameOver();
    // firt putting food to div
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        scoreElement.innerText = `Score: ${score}`;
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    
    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}
// Starts the game by updating the food position, setting an interval to call initGame, and listening for key presses.
updateFoodPosition();
stop_game = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);