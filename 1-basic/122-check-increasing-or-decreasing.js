/*
122. Check if Array is Strictly Increasing/Decreasing

Write a JavaScript program to check whether a given array of integers represents a strictly increasing or decreasing sequence. 
*/

function checkIncreasingDecreasing(arr) {
  let flagIncreasing = true;
  let flagDecreasing = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      flagIncreasing = false;
    }

    if (arr[i] < arr[i + 1]) {
      flagDecreasing = false;
    }
  }

  return flagIncreasing || flagDecreasing;
}

console.log(checkIncreasingDecreasing([1, 2, 3]));
console.log(checkIncreasingDecreasing([3, 2, 1]));
console.log(checkIncreasingDecreasing([3, 1, 2]));
