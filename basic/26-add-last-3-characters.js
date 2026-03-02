/*
26. Add Last 3 Characters to Front and Back of String

Write a JavaScript program to create a string from a given string. 
This is done by taking the last 3 characters and adding them at both 
the front and back. The string length must be 3 or more. 
*/

function lastThreeCharacter(string) {
  if (string.length < 3) {
    return `The string length must be 3 or more`;
  }

  let newString = string.slice(-3) + string + string.slice(-3);

  return newString;
}

console.log(lastThreeCharacter("Jefferson"));
