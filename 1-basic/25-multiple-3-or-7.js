/*
25. Check if Number is Multiple of 3 or 7

Write a JavaScript program to check whether a given positive number 
is a multiple of 3 or 7.  
*/

function checkNumber(number) {
  if (typeof number !== "number" || number < 0) {
    return `The input must be a valid number`;
  }

  return number % 3 === 0 || number % 7 === 0;
}

console.log(checkNumber("10"));
