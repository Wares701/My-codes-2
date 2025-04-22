//Import (if needed)


//3. Functions
function shake(event)
{
  let rand = random_range(1, 4);
  if(rand == 1)
    responseBox.innerHTML = "Yes!";
  else if(rand == 2)
    responseBox.innerHTML = "No!";
  else if(rand == 3)
    responseBox.innerHTML = "Maybe..."






  else
    responseBox.innerHTML = "chances are slim";
}
function random_range(low, high)
{
  let size = high - low + 1;
  return Math.floor(Math.random()*size)+low;
}
//1. Grab HTML elements (inputs, outputs, buttons, anything else)
let responseBox = document.getElementById("response");
let ball = document.getElementById("mainWrapper");
//2. Add event listeners
ball.addEventListener("click", shake);
//Anything else
