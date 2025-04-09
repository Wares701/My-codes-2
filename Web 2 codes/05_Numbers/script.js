// 1. pull data from the HTML pageXOffset
// 2. print the user's name, plus how old they'll be in 5 years.

//3. Difine functions to event listeners
function increase_age(e)
{
    console.log(e);
    if(e.key == "Enter")
    {
        //4. Pull data from inputs
        let name = name_input.value;
        // 5. Convert number when necessary
        let age = Number(age_input.value);
        //age = Number(age);
        age += 5;
        out_put_box.innerHTML = `Hi, ${name}, in 5 years you'll be ${age}`
    }
}


//1. connect to HTML Element you will interact with
let name_input = document.getElementById("name");
let age_input = document.getElementById("age");
let out_put_box = document.getElementById("output");

//2. Add event listeners
age_input.addEventListener("keyup", increase_age);