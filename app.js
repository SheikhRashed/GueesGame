// Code goes here..................

let min = 1,
    max = 10,
    winningNum = randomNum(min,max),
    guessesLeft = 3;

// Get Elements 

const game = document.querySelector('#game');
const minNumber = document.querySelector('.min-num');
const maxNumber = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Assign Ui Min && Max
minNumber.textContent = min;
maxNumber.textContent = max;

game.addEventListener('mousedown',(e) =>{
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});
// Guess Event
guessBtn.addEventListener('click',() =>{
  // guess
  let guess = parseInt(guessInput.value);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please Enter Number Between ${min} and ${max}`,'tomato','');
  }
  // if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true,`${winningNum} is Correct! YOU Won`)
  } else {
    // Game over - Lost
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      gameOver(false,`Game Over, You Lost. The Correct Number was ${winningNum}`);
    } else {
      // Game continues - answer wrong
      guessInput.style.borderColor = 'red';
      // clear Input 
      guessInput.value = '';
    }
  }  
});

// Define gameOver function
function gameOver(won,msg) {
  let color;
  won === true ? color = 'lightgreen' : color = 'tomato';

  // Disabled input
  guessInput.disabled = true;
  // Set Border Color
  guessInput.style.borderColor = color;
  // message color
  message.style.color = color;
  // Set Message 
  setMessage(msg);

  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
  guessBtn.style.borderColor = 'yellow';
}
// Define Random number function
function randomNum(min,max){
  return Math.floor(Math.random()*(max-min +1) + min);
}
// Define setmessage function
function setMessage(msg,color) {
  message.textContent = msg;
  message.style.color = color;
}