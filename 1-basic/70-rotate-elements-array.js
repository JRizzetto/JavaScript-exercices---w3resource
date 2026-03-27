/*
70. Rotate Elements Left in Array (Length 3)

Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  
*/

function rotateElements(nums) {
  return [nums[1], nums[2], nums[0]];
}

console.log([2, 5, 8]);
console.log(rotateElements([2, 5, 8]));
