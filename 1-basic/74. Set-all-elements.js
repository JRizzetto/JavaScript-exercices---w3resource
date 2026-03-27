/*
74. Set All Elements to Largest of First/Last in Array

Write a JavaScript program to find the largest value between the first 
and last elements and set all the other elements to that value. 
Display the updated array. 
*/

function setLargestElement(array) {
  let largest = Math.max(array[0], array[array.length - 1]);

  return array.map((element, idx, arr) => (arr[idx] = largest));
}

// console.log(setLargestElement([10, 20, 30, 40, 50]));

function allMax(nums) {
  let length = nums.length - 1;

  let maxValue = nums[0] > nums[length] ? nums[0] : nums[length];

  nums[0] = maxValue;
  nums[1] = maxValue;
  nums[2] = maxValue;

  return nums;
}

console.log(allMax([20, 30, 40])); // Output: [40, 40, 40]
console.log(allMax([-7, -9, 0])); // Output: [0, 0, 0]
console.log(allMax([12, 10, 3])); // Output: [12, 12, 12]
