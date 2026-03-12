/*
94. Find Most Frequent Number in Array

Write a JavaScript program to find the number appearing most frequently in a given array of integers. 
*/

function frequentNumber(arr) {
  let equal = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;

    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }
}

console.log(frequentNumber([2, 3, 3, 5, 7, 8, 8, 9, 9, 9]));
// console.log(frequentNumber([10, 10, 20, 20, 20, 30, 30, 30, 30, 30]));
// console.log(frequentNumber([10, 50, 50, 80, 80, 110, 110, 110, 110]));
