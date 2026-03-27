/*
67. Remove First/Last 'P' Characters in String

Write a JavaScript program to create a new string from a given string. 
This program removes the first and last characters of the string if the first or last character is 'P'. 
Return the original string if the condition is not satisfied.  
*/

function removeChar(str) {
  if (str.slice(0, 1) === "P" || str.substring(str.length - 1) === "P") {
    return str.slice(1, str.length - 1);
  }

  return str;
}

console.log(removeChar("Parabéns"));
console.log(removeChar("arabénsP"));
console.log(removeChar("casa"));
