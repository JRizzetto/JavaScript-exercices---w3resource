/*
96. Sum of Absolute Differences of Consecutive Numbers

Write a JavaScript program to compute the sum of the absolute 
differences of consecutive numbers in a given array of integers.
*/

function absoluteDifference(arr) {
  let countDifference = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    countDifference += Math.abs(arr[i] - arr[i + 1]);
  }

  return countDifference;
}

console.log(absoluteDifference([1, 2, 3, 2, -5]));
