/*
91. Find Max Sum of k Consecutive Numbers in Array

Write a JavaScript program to find the maximum possible sum of 
some of its k consecutive numbers (numbers that follow each other 
in order) in a given array of positive integers. 
*/

function maxSumConsecutive(array, k) {
  let maxSum = 0;

  for (let i = 0; i <= array.length - k; i++) {
    let sum = 0;

    for (let j = i; j < k + i; j++) {
      sum += array[j];
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

console.log(maxSumConsecutive([1, 2, 3, 4, 6, 7, 8, 11, 12, 15, 16], 4));
