//functions
function encodeMsg(e)
{
    console.log("encode button was clicked");
    let text = msgBox.ariaValueMax;
    text = text.toUpperCase();
    for(let i = 0; i < text.length; i++)
    {
        let letter = text.charCodeAt(i); //grab A
        if(letter >= "A" && letter <= "Z")
        {
        letter = letter.charCodeAt(0); //A-->65
        letter -= 65;
        //shift the letter
        letter += 13; //65-->66
        letter %=26;
        letter += 65;
        letter = String.fromCharCode(letter); //66-->B
        }
        console.log(letter);
        textEncode += letter;
    }
    outputBox.innerHTML = textEncode;
}



function decodeMsg (e)
{
    console.log("decode button was clicked");
}

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//Grab HTML elements
let msgBox = document.getElementById("msg");
let encodebtn = document.getElementById("#encode");
let decode = document.getElementById("#decode");
let outputBox = document.getElementById("output");

encodebtn.addEventListener("click", encodeMsg)
decode.addEventListener("click", decodeMsg)
