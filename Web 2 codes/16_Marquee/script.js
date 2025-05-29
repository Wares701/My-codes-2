//4. Define the function that transfers text from the input box to the output box(marquee) when the enter key is pressed.
function transferText(e)
{
    //If the enter key is pressed
    if(e.key == "Enter")
    {
        $inputValue = $input.value;
        //Grab the value from the input box and put it into the scrollBox (value vs innerHTML)
        $box.innerHTML = $inputValue;
}
}
//5. Define the function that processes when the buttons are pressed.
function shiftText(e)
{
    //Grab the event's/button's id
    let btn = e.target.id;
    //If the button pressed was "left"
    if (btn === "left")
    {
        //Stop any running timers
        clearInterval($timer);
        //Start the timer, triggering the "shiftLeft" function 3x per second.
        $timer = setInterval(shiftLeft ,1000/3);
    }
    //otherwise, if the button pressed was "stop"
    else if(btn === "stop")
    {
        //Stop any running timers
        clearInterval($timer);
    }
    //Otherwise (must have been "right")
    else if(btn === "right")
    {
        //Stop any runnilg timers
        clearInterval($timer);
        //Start the timer, triggering the "shiftRight" function 3x per second.
        $timer = setInterval(shiftRight , 1000/3);
    }
}
//6. Define the shiftLeft function
function shiftLeft()
{
    //grab the text from the marquee
    let text = $box.innerHTML;
    //grab the 1st letter of the marquee
    let first = text.charAt(0);
    //Grab everything AFTER the 1st letter
    let rest = text.substring(1);
    //Put both text chunks back in the marquee, putting the first letter at the end
    $box.innerHTML = `${rest}${first}`
}
//7. Define the shiftRight function
function shiftRight()
{
    //grab the text from the marquee
    let text = $box.innerHTML;
    //grab the last letter of the marquee
    let last = text.charAt(text.length - 1);
    //Grab everything BEFORE the last letter
    let rest = text.substring(0, text.length - 1);
    //Put both text chunks back in the marquee, putting the last letter at the beginning
    $box.innerHTML = `${last}${rest}`;
    console.log(last);
    console.log(rest);
}

//1. Create variables for every HTML element I need to connect to (5 in total):
let $box = document.getElementById("box");
let $input = document.getElementById("input");
let $right = document.getElementById("right");
let $left = document.getElementById("left");
let $stop = document.getElementById("stop");
//2. Add event listeners to all interactive elements
//2a. ... When a key is pressed while in the text input box...
$input.addEventListener("keyup", transferText)
//2b. ... when the [left, right, stop] button is pressed (1 click event listener for 3 variables, 1 function)
$right.addEventListener("click", shiftText);
$left.addEventListener("click", shiftText);
$stop.addEventListener("click", shiftText);
//3. Create an empty (null) timer.
$timer = null;