let r = 255;
let g = 0;
let b = 0;

function execute() {
    if (r < 255 && g === 0 && b === 255) {
        r += 1;
    } else if (r === 255 && g === 0 && b > 0) {
        b -= 1;
    } else if (r === 255 && g < 255 && b === 0) {
        g += 1;
    } else if (r > 0 && g === 255 && b === 0) {
        r -= 1;
    } else if (r === 0 && g === 255 && b < 255) {
        b += 1;
    } else if (r === 0 && g > 0 && b === 255) {
        g -= 1;
    } else {
        r += 1;
        g -= 1;
        b -= 1;
    }
    console.log(r);
    console.log(g);
    console.log(b);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

let timer = setInterval(execute, 50);