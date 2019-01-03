//Game values
let min = 1,
    max = 10,
    winningNum = 2,
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

//Listen for guess

guessBtn.addEventListener("click", function(){
  let guess = parseInt(guessInput.value)
  // console.log(guess)

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  }

  if(guess === winningNum){
    //Disabled Input
    gameOver(true, `${winningNum} is correct, YOU WIN!`)
    //Let user know they won
  }else{

    guessesLeft -= 1;

    if (guessesLeft === 0){
      //Game over lost
      gameOver(false, `Game Over, you lost! The winning number was ${winningNum}`)

      guessBtn.disabled = true;
    }else {
      //Game continues if answer wrong
      gameOver(false, `${guess} is not correct, ${guessesLeft} guesses left`)

      guessInput.value = " ";
    }
  }
})

//Game over function

function gameOver(won, message){
  let color;
  won === true ? color = "green" : color = "red"

  guessInput.disabled = won;
  guessInput.style.borderColor = color;
  setMessage(message, color)
}


function setMessage(msg, color){
  message.style.color = color
  message.textContent = msg;
}
