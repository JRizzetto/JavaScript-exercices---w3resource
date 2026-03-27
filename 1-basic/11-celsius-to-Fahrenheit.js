/*
11. Convert Temperatures Between Celsius and Fahrenheit
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function coverter(number, unidade) {
  let numberConvert = number;

  if (unidade === "c") {
    numberConvert = number * (9 / 5) + 32;
    return `${number}°C is ${numberConvert}°F`;
  }

  if (unidade === "f") {
    numberConvert = (number - 32) * (5 / 9);
    return `${number}°F is ${numberConvert}°C`;
  }
}

console.log(coverter(60, "c"));
