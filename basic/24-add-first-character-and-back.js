/*
24. Add First Character to Front and Back of String

Write a JavaScript program to create another string from 
a given string with the first character of the given string 
added to the front and back.
*/

function frontBackCharacter(string) {
  if (string === "") {
    return;
  }

  let newString = string[0] + string + string[0];

  return newString;
}

console.log(frontBackCharacter("Suelen"));
