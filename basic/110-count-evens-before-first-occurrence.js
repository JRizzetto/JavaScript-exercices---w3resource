/*
110. Count Evens Before First Occurrence of Number

Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

ex: 
Sample sequence = [1,2,3,4,5,6,7,8]
Given number: 5
Output: 2
*/

function countEvens(arr, occ) {
  let countEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] != occ) {
      countEven++;
    }

    if (arr[i] === occ) {
      return countEven;
    }
  }

  return -1;
}

console.log(countEvens([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(countEvens([5, 2, 4, 6, 8], 5));
console.log(countEvens([2, 4, 6, 3, 1, 5, 7], 7));
console.log(countEvens([1, 3, 2, 4, 5, 2, 6, 8], 2));
console.log(countEvens([2, 4, 6, 8, 10, 3, 5, 7], 3));
