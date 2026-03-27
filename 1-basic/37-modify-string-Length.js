/*
37. Modify String Based on Length (First 3 Lowercase/Uppercase)

Write a JavaScript program to produce a new string that has the first 3 
characters in lower case from a given string. If the string length is less 
than 3 convert all the characters to upper case.  
*/

function modifyString(string) {
  let output = string;

  if (output.length < 3) {
    output = output.toUpperCase();
  } else {
    output = output.slice(0, 3).toLowerCase() + output.slice(3, output.length);
  }

  return output;
}

console.log(modifyString("aaa"));
