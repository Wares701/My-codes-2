//Function 
//  -Change the id of Input Value
function convert(e)
{
    let input_value = input.value;
    let selectedValue = document.getElementById("temp_type").value;

    //toFixed Makes sure there are 2 decimal places in the result
    //parseFloat Converts the string to a number
    if (selectedValue === 'celsius') {
        input_value = parseFloat(input_value);
        resultCelsius.innerHTML = `${input_value.toFixed(2)} °C`;
        resultFahrenheit.innerHTML = `${(input_value * 1.8 + 32).toFixed(2)} °F`;
        resultKelvin.innerHTML = `${(input_value + 273.15).toFixed(2)} K`;
    }
    
    if (selectedValue === 'fahrenheit') {
        input_value = parseFloat(input_value);
        resultCelsius.innerHTML = `${((input_value - 32) * 5 / 9).toFixed(2)} °C`;
        resultFahrenheit.innerHTML = `${input_value.toFixed(2)} °F`;
        resultKelvin.innerHTML = `${((input_value - 32) * 5 / 9 + 273.15).toFixed(2)} K`;
    }
    
    if (selectedValue === 'kelvin') {
        input_value = parseFloat(input_value); 
        resultCelsius.innerHTML = `${(input_value - 273.15).toFixed(2)} °C`;
        resultFahrenheit.innerHTML = `${((input_value - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
        resultKelvin.innerHTML = `${input_value.toFixed(2)} K`;
    }
}

//Get ELements from HTML by Id
let resultCelsius = document.getElementById("result_c");
let resultFahrenheit = document.getElementById("result_f");
let resultKelvin = document.getElementById("result_k");
// let C = document.getElementById("celsius");
// let F = document.getElementById("fahrenheit");
// let K = document.getElementById("kelvin");
let btn = document.getElementById("btn");
let input = document.getElementById("input");

//Add even listener for the function convert
btn.addEventListener("click", convert);