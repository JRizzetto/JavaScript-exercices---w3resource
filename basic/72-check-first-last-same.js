/*
72. Check if First and Last Elements Are Same

Write a JavaScript program to check whether the first and last elements are the same in a given array of integers of length 3.  
*/

function firstLastSame(nums) {
  return nums[0] === nums[nums.length - 1];
}

// console.log(firstLastSame([1, 2, 1]));
// console.log(firstLastSame([2, 3, 4]));
// console.log(firstLastSame([2, 3, 2]));
// console.log(firstLastSame([2]));

function first_last_same(nums) {
  const end = nums.length - 1;

  if (nums.length >= 1) {
    return nums[0] === nums[end];
  } else {
    false;
  }
}

console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));
