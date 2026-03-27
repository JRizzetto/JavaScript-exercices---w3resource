/*
94. Find Most Frequent Number in Array

Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
*/

function array_element_mode(arr) {
  let ctr = []; // [1, 1, 1, 0, 0, 0, 0, 3, 0]
  let ans = 0; // 7

  let maxValue = Math.max(...arr);
  for (let i = 0; i < maxValue; i++) ctr.push(0);

  for (let i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if (ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }

  return ans + 1;
}

// console.log(array_element_mode([1, 2, 8, 8, 8, 3, 2, 2, 8, 1, 9]));

function frequentNumber(arr) {}

console.log(frequentNumber([1, 2, 8, 8, 8, 3, 2, 2, 8, 1, 9]));
