/*
139. Find Position of Rightmost Round Number

Write a JavaScript program to find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0.  
Note: A round number is informally considered to be an integer that ends with one or more zeros.
*/

function rightmostRoundNumber(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 === 0) {
      return i;
    }
  }

  return -1;
}

console.log(rightmostRoundNumber([1, 2, 30, 54, 56]));
console.log(rightmostRoundNumber([1, 33, 50, 100, 45, 10]));
console.log(rightmostRoundNumber([1, 2, 54, 56]));
