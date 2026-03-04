/*
48. Reverse a Given String

Write a JavaScript program to reverse a given string. 
*/

function reverseText(text) {
  return text.split("").reverse().join("");
}
console.log(reverseText("Jefferson"));

// ------------------------------------------

function reverseString(text) {
  let result = "";

  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

console.log(reverseString("Suelen"));
