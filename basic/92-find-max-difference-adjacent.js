/*
92. Find Max Difference Between Adjacent Elements

Write a JavaScript program to find the maximum difference 
between any two adjacent elements of a given array of integers. 
*/

function adjacentElements(arr) {
  let maxDif = 0;

  for (let i = 1; i < arr.length; i++) {
    let result = Math.abs(arr[i - 1] - arr[i]);
    if (result > maxDif) {
      maxDif = result;
    }
  }

  return maxDif;
}

// console.log(adjacentElements([1, 2, 3, 5, 8, 12, 14, 19, 25]));

function max_difference(arr) {
  let max = 0;
  let temp;

  for (let i = 0; i < arr.length - 1; i++) {
    temp = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, temp);
  }

  return max;
}

console.log(max_difference([1, 2, 3, 8, 9])); // 5
console.log(max_difference([1, 2, 3, 18, 9])); // 15
console.log(max_difference([13, 2, 3, 8, 9])); // 11
