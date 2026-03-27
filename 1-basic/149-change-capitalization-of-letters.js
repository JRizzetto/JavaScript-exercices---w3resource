/*
149. Change Capitalization of All Letters

Write a JavaScript program to change the capitalization of all letters in a given string.
*/

function capitalizationLetters(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }

  return newStr;
}

// console.log(capitalizationLetters("w3resource"));
// console.log(capitalizationLetters("Germany"));

function change_case(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }

  return newStr;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));
