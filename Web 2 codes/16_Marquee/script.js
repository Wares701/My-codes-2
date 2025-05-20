//4. Define the function that transfers text from the input box to the output box(marquee) when the enter key is pressed.
function transferText(e)
{
    //If the enter key is pressed
    if(e.key == "Enter")
    {
        //Grab the value from the input box and put it into the scrollBox (value vs innerHTML)

    }
}
//5. Define the function that processes when the buttons are pressed.
function shiftText(e)
{
    //Grab the event's/button's id
    let btn = e.target.id;
    //If the button pressed was "left"

    {
        //Stop any running timers

        //Start the timer, triggering the "shiftLeft" function 3x per second.

    }
    //otherwise, if the button pressed was "stop"

    {
        //Stop any running timers

    }
    //Otherwise (must have been "right")

    {
        //Stop any running timers

        //Start the timer, triggering the "shiftRight" function 3x per second.

    }
}
//6. Define the shiftLeft function
function shiftLeft()
{
    //grab the text from the marquee

    //grab the 1st letter of the marquee

    //Grab everything AFTER the 1st letter

    //Put both text chunks back in the marquee, putting the first letter at the end

}
//7. Define the shiftRight function
function shiftRight()
{
    //grab the text from the marquee

    //grab the last letter of the marquee

    //Grab everything BEFORE the last letter

    //Put both text chunks back in the marquee, putting the last letter at the beginning

}

//1. Create variables for every HTML element I need to connect to (5 in total):





//2. Add event listeners to all interactive elements
//2a. ... When a key is pressed while in the text input box...

//2b. ... when the [left, right, stop] button is pressed (1 click event listener for 3 variables, 1 function)



//3. Create an empty (null) timer.
