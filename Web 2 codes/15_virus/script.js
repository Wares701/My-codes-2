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
    if(downloadTimer == null)
    {
        downloadTimer = setInterval(addWidth, 1000 / 5);
    }
}
//Another function for the alarm itslef
function addWidth()
{
    perc += random_range(1,10)/10;
    console.log(perc);
    progressBox.style.width = perc+"%";
    if (perc < 10) {
        outputBox.innerHTML = "Download Started";
    } else if (perc < 20) {
        outputBox.innerHTML = "By the way... this is a virus Hahahahah!";
    } else if (perc < 30) {
        outputBox.innerHTML = "You fell into my trap";
    } else if (perc < 40) {
        outputBox.innerHTML = "Just kidding... or am I?";
    } else if (perc < 50) {
        outputBox.innerHTML = "50% complete... there's no going back now.";
    } else if (perc < 60) {
        outputBox.innerHTML = "Your files are looking tasty.";
    } else if (perc < 70) {
        outputBox.innerHTML = "Encrypting your memes...";
    } else if (perc < 80) {
        outputBox.innerHTML = "Summoning digital gremlins.";
    } else if (perc < 90) {
        outputBox.innerHTML = "Installing chaos.exe";
    } else if (perc < 100) {
        outputBox.innerHTML = "Finalizing your doom... almost there!";
    }
    else if(perc >= 100)
    {
        clearInterval(downloadTimer);
        downloadTimer = null;
        perc = 0;
        outputBox.innerHTML = "Download complete. You are pwned";
    }
}

function random_range(low, high)
{
  let size = high - low + 1;
  return Math.floor(Math.random()*size)+low;
}
let startDownload = document.getElementById("start");
let outputBox = document.getElementById("output");
let progressBox = document.getElementById("progress")

//Event Listeners
startDownload.addEventListener("click", missionSuccess);

downloadTimer = null;
perc = 0;

