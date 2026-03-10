/*
81. Add Two Digits in a Two-Digit Number

Write a JavaScript program to add two digits 
to a given positive integer of length two.  
*/

function addTwoDigits(number) {
  return Math.floor(number / 10) + (number % 10);
}

console.log(addTwoDigits(25));
console.log(addTwoDigits(25)); // Output: 7 (2 + 5)
console.log(addTwoDigits(50)); // Output: 5 (5 + 0)
