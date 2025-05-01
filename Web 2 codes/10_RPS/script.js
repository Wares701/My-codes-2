let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("scissors");
let outputBox = document.getElementById("result");
let userScore = document.getElementById("user_score");
let computerScore = document.getElementById("computer_score");
let bothScored = document.getElementById("both_scored");
let computerSelect = document.getElementById("computer");
let userSelect = document.getElementById("user");
let compWinSentence = "Boom! Crushed it. Better luck next time human!";

function computerFunction(e)
{
  console.log(e.target);
    let rand = random_range(1,3)
    console.log(rand)
    if (rand == 1)
    {
        computerSelect.innerHTML = "Rock";
    } 
    else if(rand == 2) 
    {
        computerSelect.innerHTML = "Paper"
    }
    else if(rand == 3) 
    {
        computerSelect.innerHTML = "Scissors"
    }

    if (userSelect.innerHTML == "Paper" && rand == 2 ||
      userSelect.innerHTML == "Rock" && rand == 1 ||
      userSelect.innerHTML == "Scissors" && rand == 3) {
        outputBox.innerHTML = "Guess it's a tie.";
  } 
  else if (userSelect.innerHTML == "Scissors" && rand == 2 ||
           userSelect.innerHTML == "Rock" && rand == 3 ||
           userSelect.innerHTML == "Paper" && rand == 1) {
    outputBox.innerHTML = "You win this one... but I'll crush the next one!";
  } 
  else {
      outputBox.innerHTML = "Boom! Crushed it. Better luck next time human!";
  }
 
    if (outputBox.innerHTML == "Guess it's a tie.") {
      bothScored.innerHTML = parseInt(bothScored.innerHTML) + 1;
  } else if (outputBox.innerHTML == "You win this one... but I'll crush the next one!") {
      userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
  } else {
      computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
  }
}

function counter(){
  
}
function paperPress(e)
{
    userSelect.innerHTML = "Paper";
}
function rockPress(e)
{
    userSelect.innerHTML = "Rock";
}
function scissorsPress(e)
{
    userSelect.innerHTML = "Scissors";
}

function random_range(low, high)
{
  let size = high - low + 1;
  return Math.floor(Math.random()*size)+low;
}



Rock.addEventListener("click", rockPress);
Rock.addEventListener("click", computerFunction);
Paper.addEventListener("click", paperPress);
Paper.addEventListener("click", computerFunction);
Scissors.addEventListener("click", scissorsPress);
Scissors.addEventListener("click", computerFunction);

