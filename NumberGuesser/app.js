//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener

game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload()
  }
})

//Listen for guess

guessBtn.addEventListener("click", function(){

  let guess = parseInt(guessInput.value)
  // console.log(guess)

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  }

  if(guess === winningNum){

    gameOver(true, `${winningNum} is correct, YOU WIN!`)

  }else{

    guessesLeft -= 1;

    if (guessesLeft === 0){
      //Game over lost
      gameOver(false, `Game Over, you lost! The winning number was ${winningNum}`)

    }else {
      //Game continues if answer wrong
      guessInput.value = " ";

      guessInput.style.borderColor = "red";

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red")

    }
  }
})

//Game over function

function gameOver(won, message){
  let color;
  won === true ? color = "green" : color = "red"

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(message, color)

  //Play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again"
}

//get winning number
function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg;
}
