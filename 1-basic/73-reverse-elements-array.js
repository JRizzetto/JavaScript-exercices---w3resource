/*
73. Reverse Elements of Array (Length 3)

Write a JavaScript program to reverse the elements of a given array of integers of length 3. 
*/

function reverserElements(nums) {
  let end = nums.length - 1;

  if (nums.length >= 1) {
    return [nums[end], nums[1], nums[0]];
  }

  return false;
}

// console.log(reverserElements([1, 2, 3]));
// console.log(reverserElements([3, 2, 1]));
// console.log(reverserElements([12, 24, 33]));

function reverse3(array) {
  const listArray = array.map((element, idx, arr) => {
    return arr[arr.length - 1 - idx];
  });

  return listArray;
}

console.log(reverse3([5, 4, 3])); // Output: [3, 4, 5]
console.log(reverse3([1, 0, -1])); // Output: [-1, 0, 1]
console.log(reverse3([2, 3, 1])); // Output: [1, 3, 2]
