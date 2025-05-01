
function computerFunction(e)
{
  console.log(e.target);
    let rand = random_range(1,3)
    if (rand == 1)
    {
        computerSelect.innerHTML = "Rock";
    } 
    else if(rand == 2) 
    {
        computerSelect.innerHTML = "Papper"
    }
    else if(rand == 3) 
    {
        computerSelect.innerHTML = "Scissors"
    }


    /*
      If both the user and computer select the same thing, then no one wins.
      If 
        the user selects rock and the computer selects scissors 
        or user selects scissors and the computer selects paper, 
        or the user selects paper and the computer selects rock, 
            then the user wins.
      else, the computer wins.
    */


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

let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("scissors");
let outputBox = document.getElementById("result");
let userScore = document.getElementById("user_score");
let computerScore = document.getElementById("computer_score");
let bothScored = document.getElementById("both_scored");
let computerSelect = document.getElementById("computer");
let userSelect = document.getElementById("user");


Rock.addEventListener("click", computerFunction);
Rock.addEventListener("click", rockPress);
Paper.addEventListener("click", computerFunction);
Paper.addEventListener("click", paperPress);
Scissors.addEventListener("click", computerFunction);
Scissors.addEventListener("click", scissorsPress);
