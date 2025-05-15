//Functions
function encodeMsg(e)
{
    console.log("Encode Button was clicked");
    let text = msgBox.value;
    text = text.toUpperCase();
    let textEncode = ""
    let shift = 13;
    for(let i = 0; i < text.length; i++)
    {
        let letter = text.charAt(i);    //grab A
        if(alphabet.includes(letter))
        {
            letter = letter.charCodeAt(0);    //A-->65
            letter -= 65;
            //shift the letter
            letter += 13;//65-->66
            letter %= 26;
            letter += 65;
            letter = String.fromCharCode(letter);   //66-->B
        }
        console.log(letter);
        textEncode += letter;
    }
    outputBox.innerHTML = textEncode;

}
//1. add a shift box of some sort - number input, slider, dropdown
//2. update encode code to make sure it works with the shift
//3. Add a decode button to the HTML and a decodeMsg to you JS. 
//      Get your decodeMsg to work by rotating backwords
//4. Update the CSS to make the application look nice. Be creative.

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Grab HTML elements
let msgBox = document.getElementById("msg");
let encodeBtn = document.querySelector("#encode");
let outputBox = document.getElementById("output");
//Add event listeners
encodeBtn.addEventListener("click", encodeMsg);
//Add timers (won't need for this project)
