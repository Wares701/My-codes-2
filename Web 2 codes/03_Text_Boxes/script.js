alert("Hello Mom")

function say_hi()
{
    let name = name_input.value;
    let age = age_input.value;

    output.innerHTML = `Hi, ${name}, I wish I was ${age}`;
}


let name_input = document.getElementById("name");
let age_input = document.getElementById("age");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", say_hi);
