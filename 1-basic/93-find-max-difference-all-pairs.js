/*
93. Find Max Difference Among All Pairs in Array

Write a JavaScript program to find the maximum difference 
among all possible pairs of a given array of integers
*/

function differencePairs(arr) {
  let maxNumber = arr[0];
  let minNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) maxNumber = arr[i];
    if (arr[i] < minNumber) minNumber = arr[i];
  }

  return maxNumber - minNumber;
}

console.log(differencePairs([1, 2, 3, 8, 9])); // 8
console.log(differencePairs([1, 2, 3, 18, 9])); // 17
console.log(differencePairs([13, 2, 3, 8, 9])); // 11
