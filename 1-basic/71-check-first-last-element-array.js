/*
71. Check if 1 is First/Last Element in Array

Write a JavaScript program to check whether 1 appears in 
the first or last position of a given array of integers. 
The array length must be larger than or equal to 1. 
*/

function firstLastChar(nums) {
  if (nums.length >= 1) {
    return nums[0] === 1 || nums[nums.length - 1] === 1;
  }

  return false;
}

console.log(firstLastChar([1, 2, 3]));
console.log(firstLastChar([3, 2, 1]));
console.log(firstLastChar([4, 5, 6]));
console.log(firstLastChar([]));
