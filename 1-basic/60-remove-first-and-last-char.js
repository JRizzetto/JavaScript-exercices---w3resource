/*
60. Remove First and Last Characters in String

Write a JavaScript program to create a new string without the first and last characters of a given string.
*/

function removeChar(str) {
  if (str.length > 2) {
    return str.slice(1, str.length - 1);
  }

  return str;
}

// console.log(removeChar("JavaScript"));

function removeCharacter(str) {
  return str.substring(1, str.length - 1);
}

console.log(removeCharacter("JavaScript"));
console.log(removeCharacter("JS"));
console.log(removeCharacter("PHP"));
