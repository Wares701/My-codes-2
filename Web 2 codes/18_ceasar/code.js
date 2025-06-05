
let msgBox = document.getElementById("msg");
let encodeBtn = document.querySelector("#encode");
let outputBox = document.getElementById("output");
let $shift = document.getElementById("shift");
let decodeBtn = document.getElementById("decode");
//Functions

function getValidShift() {
    let value = parseInt($shift.value);
    if (isNaN(value)) return 0;
    if (value < 0) value = 0;
    if (value > 25) value = 25;
    console.log(value);
    return value;

}


function encodeMsg(e)

{
    console.log("Encode Button was clicked");
    let text = msgBox.value;
    text = text.toUpperCase();
    let textEncode = ""

    let shift = getValidShift();
    for(let i = 0; i < text.length; i++)
    {
        let letter = text.charAt(i);    //grab A
        if(alphabet.includes(letter))
        {
            letter = letter.charCodeAt(0);    //A-->65
            letter -= 65;
            //shift the letter
            letter += shift;//65-->66
            letter %= 26;
            letter += 65; 
            letter = String.fromCharCode(letter);   //66-->B
        }
        console.log(letter);
        textEncode += letter;
    }
    outputBox.innerHTML = textEncode;


}

function decodeMsg() {
    let originalShift = getValidShift();    // 2) Compute the “reverse” shift
    let reverseShift = (26 - originalShift) % 26;
    msgBox.value = outputBox.innerHTML;
    $shift.value = reverseShift;
    encodeMsg();
    $shift.value = originalShift;
}

//3. Add a decode button to the HTML and a decodeMsg to you JS. 
//      Get your decodeMsg to work by rotating backwords
//4. Update the CSS to make the application look nice. Be creative.

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Grab HTML elements

//Add event listeners
encodeBtn.addEventListener("click", encodeMsg);
decodeBtn.addEventListener("click", decodeMsg);
//Add timers (won't need for this project)
