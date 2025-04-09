function doMathStuff(e)
{
    console.log(e);
    if(key == "Enter")
    {
        let num1 = number(num1input.value)
        let num2 = number(num2input.value)
        let num3 = number(num3input.value)
        let sum = num1 + num2 + num3;
        let min = Math.min(num1, num2, num3);
        let man = Math.max(num1, num2, num3);
        let ave = sum / 3;
        sumoutput.innerhtml = sum;
        minoutput.innerhtml = min;
        maxoutput.innerhtml = max;
        aveoutput.innerhtml = ave;
    }
}



let num1input = document.getElementById("num1")
let num2input = document.getElementById("num2")
let num3input = ducument.getElementById("num3")
let sumoutput = document.getElementById("sumoutput")
let minoutput = document.getElementById("minoutput")
let maxoutput = document.getElementById("maxoutput")
let aveoutput = document.getElementById("aveoutput")