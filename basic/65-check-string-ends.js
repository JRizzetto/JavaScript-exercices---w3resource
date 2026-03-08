/*
65. Check if String Ends with 'Script'

Write a JavaScript program to test whether a string ends with "Script". 
The string length must be greater than or equal to 6.
*/

function checkEnds(str) {
  let param = "Script";

  if (str.length >= 6) {
    return str.substring(str.length - param.length, str.length) === "Script";
  }

  return false;
}

console.log(checkEnds("JavaScript"));
console.log(checkEnds("Python"));
