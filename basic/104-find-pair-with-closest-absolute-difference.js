/*
104. Find Pair with Closest Absolute Difference

Write a JavaScript program to find two elements of an 
array such that their absolute difference is not larger than 
a given integer. However, it is as close as possible to the integer. 
*/

function closesDifference(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j >= 0; j--) {
      let difference = Math.abs(arr[i] - arr[j]);
      if (i !== j && difference <= target) {
        return `${arr[i]} e ${arr[j]} = ${difference}`;
      }
    }
  }
}

console.log(closesDifference([10, 15, 21], 5));
