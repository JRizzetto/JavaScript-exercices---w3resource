/*
107. Count Divisible Sorted Pairs in Array

Write a JavaScript program to find the number of sorted pairs formed by arrays of integers. This is such that one element in the pair is divisible by the other one. 
For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
The output of [2, 4, 6] -> 2 - (2,4), (2,6)
The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)
*/

function divisiblePairs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[i] % arr[j] === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(divisiblePairs([1, 3, 2]));
console.log(divisiblePairs([2, 4, 6]));
console.log(divisiblePairs([2, 4, 16]));
