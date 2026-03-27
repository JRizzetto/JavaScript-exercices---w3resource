/*
39. Sum Two Integers and Return Based on Range

Write a JavaScript program to compute the sum of the two given integers. 
If the sum is in the range 50..80 return 65 otherwise return 80.  
*/

function sumTwoIntegers(first, second) {
  let sum = first + second;

  return sum >= 50 && sum <= 80 ? 65 : 80;
}

console.log(sumTwoIntegers(30, 60));
