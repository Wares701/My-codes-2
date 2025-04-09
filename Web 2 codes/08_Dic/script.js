//Imports

//Functions
function roll(e)
{
    console.log()
    if(e.target.id == "die1")
    {
        die1_box.innerHTML = random_range(1, 6);
    }
    else if(e.target.id == "die2")
    {
        die1_box.innerHTML = random_range(1, 6);
    }
    die2_box.innerHTML = random_range(1, 6);
}
function random_range(low, high)
{
    let size = high - low + 1;
    return Math.floor(Math.random()*size)+low  //0, 6
    //0, 0.999999
    //0, 5.999999
    //0, 5
    //0, 6

}
//Grab HTMl inputs, outputs, button, etc
let die1_box = document.getElementById("die1")
let die2_box = document.querySelector("#die2")
let roll_btn = document.getElementById("roll_btn")
//Add event listener
die1_box.addEventListener("click", roll)
die2_box.addEventListener("click", roll)