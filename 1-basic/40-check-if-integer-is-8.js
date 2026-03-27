/*
40. Check if Integer is 8 or Difference/Sum Equals 8

Write a JavaScript program to check from two given integers 
whether one of them is 8 or their sum or difference is 8.  
*/

function checkIntegers(first, second) {
  return (
    first === 8 ||
    second === 8 ||
    first + second === 8 ||
    Math.abs(first - second) === 8
  );
}

console.log(checkIntegers(12, 4));
