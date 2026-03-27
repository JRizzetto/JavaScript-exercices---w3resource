/*
118. Check if Number is in Range

Write a JavaScript program to check whether a given number is in a given range. 
*/

function checkRange(number, start, end) {
  if (number >= start && number <= end) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange(10, 5, 20));
console.log(checkRange(30, 5, 20));
console.log(checkRange(4, 5, 20));
