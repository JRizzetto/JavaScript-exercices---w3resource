/*
136. Replace First Digit in String with $

Write a JavaScript program to replace the first digit in a string (should have at least one digit) with the $ character.
*/

function replaceFirstDigit(str) {
  let a = "a".charCodeAt(0);
  let z = "z".charCodeAt(0);

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) >= a && str[i].charCodeAt(0) <= z) {
      newStr += str[i];
    } else {
      newStr += "$";
    }
  }

  return newStr;
}

// console.log(replaceFirstDigit("abc1dabc"));
// console.log(replaceFirstDigit("p3ython"));

function replace_first_digit(str) {
  return str.replace(/[0-9]/, "$");
}

console.log(replaceFirstDigit("abc1dabc"));
console.log(replaceFirstDigit("p3ython"));
