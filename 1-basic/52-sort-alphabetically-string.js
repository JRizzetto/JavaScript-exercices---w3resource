/*
52. Sort Letters Alphabetically in String

Write a JavaScript program to convert letters of a given string alphabetically.  
*/

function sortLetters(text) {
  if (typeof text != "string") {
    return false;
  }

  let listChar = text
    .toLowerCase()
    .match(/[a-zA-Z]/g)
    .sort()
    .join("");

  return listChar;
}

// console.log(sortLetters("Jefferson"));

function sortLetter(str) {
  return str.toLowerCase().split("").sort().join("");
}

console.log(sortLetter("Suelem"));
