/* 
    Timers:
        1.start a timer
            a.repeat alarm: setInterval(function_name, delayMS)
                MS/Sec -> 1000ms per second
            b.1x alarm : setTimeout(function_name, delayMS)
            Example:
                let my_timer = setInterval(popUp, 5*1000)

        2. Stop a timer
            a. clearInterval(name_of_timer)
            b. clearTimeout(name_of_timer)
                premature stop
*/


//Funtions 

//Don't play pretend, the time we spent The clouds we saw on my lawn back then I fell in love, I was younger once
// You're on my mind, you're on my lips
// It doesn't get better than this
// What wasn't realized
// We walked on the leaves of fall
// You asked if I had love for you at all
// I said I do
// I said I do, I said I do
// I said I do, like you want to
// I said I, I do
// I said I do, like you want to
// Take from me, my pulse is gone
// Growing up, I was never strong
// You realized what distance was
// Don't play pretend, the time we spent
// The clouds we saw on my lawn back then
// I fell in love, I was younger once
// It's taken me, a kiss she stole
// I never wanted to go home
// I said I do
// You called me at midnight and said I didn't care for you at all
// I said I do
// I said I do, I said I do
// I said I do, like you want to
// I said I, I do
// I said I do, I said I do"




// function add_letter() //No e Parameter
// {
//     let size = type_writer.innerHTML.length
//     if(size < txt.lentgh)
//     {
//         type_writer.innerHTML += txt[size];
//     }
//     else
//     {
//         clearInterval(time);
//     }
//     type_writer.innerHTML += txt[size];
// }
let txt = 
"Take from me, my pulse is gone Growing up, I was never strong"

function add_letter() //No e Parameter
{
    let size = type_writer.innerHTML.length
    if(size < txt.length)
    {
        type_writer.innerHTML += txt[size];
        time = setTimeout(add_letter, random_range(25, 400))
    }
}

function random_range(low, high){
    let size = high - low + 1;
    return Math.floor(Math.random() * size) + low;
}
//Greab HTML Stuff
let type_writer = document.getElementById("typewriter");
//Add Event Listeners

//Add timers
// let time = setInterval(add_letter, 1000)
let time = setInterval(add_letter, 50)