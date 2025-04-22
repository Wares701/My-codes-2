//Imports


//Functions
function roll(e)
{
  console.log(e.target.id)
  if(e.target.id == "die1")
  {
    die1Box.innerHTML = random_range(1, 6);
  }
  else if(e.target.id == "die2")
  {
    die2Box.innerHTML = random_range(1, 6);
  }
  else
  {
    die1Box.innerHTML = random_range(1, 6);
    die2Box.innerHTML = random_range(1, 6);
  }
  let sum = Number(die1.innerHTML) + Number(die2Box.innerHTML);
  output.innerHTML = "Total: "+sum;
  /* Update the paragraph to hold the sum of the 2 dice */
}
function random_range(low, high)
{
  let size = high - low + 1;
  return Math.floor(Math.random()*size)+low;
}
//Grab HTML inputs, outputs, buttons, etc.
let die1Box = document.getElementById("die1")
let die2Box = document.querySelector("#die2")
let rollBtn = document.getElementById("rollBtn")
let output = document.getElementById("output");
/* Grab the output paragraph by its id */
//Add event listeners
die1Box.addEventListener("click", roll)
die2Box.addEventListener("click", roll)
rollBtn.addEventListener("click", roll)


rollBtn.click();


/*
  In HTML
    - add an output paragraph (give it an id)
  In JS
    - Grab the output paragraph by id
    - At the end of every call to the roll function,
        put the sum of the dice in the output paragraph
*/
