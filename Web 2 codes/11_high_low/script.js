let sendGuess = document.getElementById("send_guess");
let Guess = document.getElementById("guess");
let Count = document.getElementById("count");
let Hint = document.getElementById("hint");
let gameStarted = document.getElementById("game_started");
let menu = document.getElementById("menu");
let game = document.getElementById("game");
let rand = 0;
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
  let guessValue = Number(Guess.value);
  if(guessValue < rand){
    Hint.innerHTML = "Your guess is too low!";
  }
  else if(guessValue > rand){
    Hint.innerHTML = "Your guess is too high!";
  }
  else if(guessValue == rand){
    Hint.innerHTML = "Bingo! You have guessed it";
  }

}

gameStarted.addEventListener("click", computerGuess);
sendGuess.addEventListener("click", checkGuess);
