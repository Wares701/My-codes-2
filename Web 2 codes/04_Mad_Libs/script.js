
function make_own(e) {
    let noun1 = noun_1_input.value;
    let noun2 = noun_2_input.value;
    let noun3 = noun_3_input.value;
    let adjective1 = adjective_1_input.value;
    let adjective2 = adjective_2_input.value;
    let adjective3 = adjective_3_input.value;

    outputBox.innerHTML = `The ${noun1} jumped over the ${adjective1} ${noun2} and into the ${adjective2} garden, chasing a small ${adjective3} ${noun3}. The sun was setting, casting light across the field.`;
}


let noun_1_input = document.getElementById("noun-1");
let noun_2_input = document.getElementById("noun-2");
let noun_3_input = document.getElementById("noun-3");;
let adjective_1_input = document.getElementById("adjective-1");
let adjective_2_input = document.getElementById("adjective-2");
let adjective_3_input = document.getElementById("adjective-3");
let outputBox = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click", make_own);