//JS: The "Function" of our web page

/*
    Javascript adds "dynamics" to our webpage 
    The page can change based on inputs or clicks
*/

function change_text(){
    let output = document.getElementById("output");
    console.log(output.innerHTML);
    output.innerHTML = "I putted a message from JS"
}

console.log("Hello Mom");

let btn = document.getElementById("btn");
btn.addEventListener("click", change_text);

    // 1. Alert w/ an alert box
    // 2. console.log
    // 3. assign id's and pull those values from HTML
    // 4. Get info out of an element useing innerHTML
    // 5. Put info into element using innerHTML
    // 6. Define a function
    // 7. Call a function9
    // 8. Add an event listener to a button