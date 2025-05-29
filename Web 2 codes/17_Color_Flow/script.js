$timer = setInterval(50);

r = 225;
g = 0;
b = 0;

/*
When the function is triggered
*/
function execute(){
    if(r < 225 && g == 0 && b == 225){
        r += 1;
    }

    else if(r == 225 && g == 0 && b > 0){
        b -=1;
    }
}

/*
otherwise if r is 255 and g is 0 and b is greater than 0
*/

/*
decrease b
*/

/*
otherwise if r is 255 and g is less than 255 and blue is 0
*/

/*
increase g
*/

/*
otherwise if r is greater than 0 and g is 255 and b is 0
*/

/*
decrease r
*/

/*
otherwise if r is 0 and g is 255 and b is less than 255
*/

/*
increase b
*/

/*
otherwise if r is 0 and g is greater than 0 and b is 255
*/

/*
decrease g
*/

/*
otherwise
*/

/*
increase r
*/

/*
decrease g
*/

/*
decrease b
*/

/*
Change the background color to the new RGB values.
*/

/*
document.body.style.backgroundColor = "rgb("+r+", "+g +", "+b+")";  
*/

