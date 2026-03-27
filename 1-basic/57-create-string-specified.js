/*
57. Create String of Specified Copies

Write a JavaScript program to create one string of specified copies (positive numbers) of a given string. 
*/

function createCopies(str, number) {
  if (number < 0) {
    return `Enter a positive number!`;
  }

  let strCopies = "";

  for (let i = 1; i <= number; i++) {
    strCopies += str;
  }

  return strCopies;
}

// console.log(createCopies("abc", 3));

function stringCopies(str, number) {
  if (number < 0) {
    return false;
  }

  return str.repeat(number);
}

console.log(stringCopies("abc", 3));
