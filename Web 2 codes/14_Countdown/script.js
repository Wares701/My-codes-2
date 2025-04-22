//Functions
function countDown(e)
{
    //If the timer isn't running
    if(timeTracker == null)
    {
        time = Number(newTimeBox.value);
        timeLeftBox.innerHTML = time;
        timeTracker = setInterval(decreaseTime, 1000/10)
    }
    else    //stop the timer
    {
        stopTimer();
    }
}
function decreaseTime()
{
    if(time > .02)	//Had problems w/ floating point number precision errors.
    {
        time -= 1/10;
        timeLeftBox.innerHTML = time.toFixed(1);
    }
    else
    {
        stopTimer();
    }
}

function stopTimer(

){
    clearInterval(timeTracker)
    timeTracker = null;
}
//Grab important HTML stuff
let timeLeftBox = document.getElementById("timeLeft");
let newTimeBox = document.getElementById("newTime");
let startStopBtn = document.getElementById("startStop");
console.log(startStopBtn);
//Add Event Listeners
startStopBtn.addEventListener("click", countDown);
time = 0;
//Add Timers
timeTracker = null;