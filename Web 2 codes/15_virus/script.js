/*
    1. Grab HTML Elements
        1. Download Button
        2. Output Text
        3. Progress bar
    2. Add Event Listener to the download button
    3. Add timer and set it to null
    3.5. Add a variable to represent your percentage. (0 initial value)
    4. Add the event listener function
        Start the "Download" (Timer)
    5. When timer goes off (another function)
    Add a little to the percent variable.
        Make the progress bar width match the percent variable.
        Add a special message in every 10 % in the output space

*/
function missionSuccess(e) 
{
    console.log(e.target.id);
}

let startDownload = document.getElementById("start");
let outputBox = document.getElementById("output");
let progressBox = document.getElementById("progress")

startDownload.addEventListener("click", missionSuccess);

downloadTimer = null;
perc = 0;

