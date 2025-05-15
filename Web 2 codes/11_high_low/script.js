const sendGuess = document.getElementById("send_guess");
let Guess = document.getElementById("guess");
const guessCount = document.getElementById("count");
let Hint = document.getElementById("hint");
let gameStarted = document.getElementById("game_started");
let menu = document.getElementById("menu");
let game = document.getElementById("game");
let rand = 0;
let count = 0;
function computerGuess(e){
    menu.classList.toggle("hide");
    game.classList.toggle("hide");

    rand = random_range(1,100)
    console.log(rand)
}

function random_range(low, high)
{
  let size = high - low + 1;
  return Math.floor(Math.random()*size)+low;
}

function checkGuess(e){
  console.log(sendGuess.innerHTML)
  if (sendGuess.innerHTML == "Send Guess" )
  {

    let guessValue = Number(Guess.value);
    Guess.value = "";
    Guess.focus()
    if(guessValue < rand){
      Hint.innerHTML = `${guessValue} too low!`;
      count++;
      guessCount.textContent = count;
    }
    else if(guessValue > rand){
      Hint.innerHTML = `${guessValue} is too high!`;
      count++;
      guessCount.textContent = count;
    }
    else if(guessValue == rand){
      Hint.innerHTML = "Bingo! You have guessed it.";
      sendGuess.innerHTML = "Play Again";
      
      
    }

  }
  else 
  {
    count = 0;
    guessCount.textContent = count;
    Guess.value = "";
    sendGuess.innerHTML = "Send Guess";
    rand = random_range(1,100)
    console.log(rand)
  }
}

  //Always put it to zero outside of the function

gameStarted.addEventListener("click", computerGuess);
sendGuess.addEventListener("click", checkGuess);
