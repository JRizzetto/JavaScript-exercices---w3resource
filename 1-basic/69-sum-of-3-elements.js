/*
69. Sum of 3 Elements in Array (Length 3)

Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
*/

function sumElementes() {
  let listInt = [2, 4, 9];

  if (listInt.length === 3) {
    return listInt[0] + listInt[1] + listInt[2];
  }

  return false;
}
// console.log(sumElementes());

function sumArray(nums = []) {
  return nums[0] + nums[1] + nums[2];
}
console.log(sumArray([10, 12, 16]));
