/*
23. Swap First and Last Characters in String

Write a JavaScript program to create a new string from a given string by 
changing the position of the first and last characters. The string length must 
be broader than or equal to 1. 
*/

function swapCharacters(string) {
  if (string.length <= 1) {
    return `The length must be broader than 1`;
  }

  let newString =
    string.slice(string.length - 1) +
    string.slice(1, string.length - 1) +
    string.slice(0, 1);

  return newString;
}

console.log(swapCharacters("oi"));
