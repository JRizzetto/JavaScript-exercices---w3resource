/*
123. Check if Array is Permutation of Numbers 1 to n

Write a JavaScript program to find out if the members of a given array of integers are a permutation of numbers from 1 to a given integer. 
*/

function permutationArray(arr, num) {
  let sortArray = arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (
      arr.length != num ||
      arr[i] <= 0 ||
      arr[i] > num ||
      i + 1 != sortArray[i]
    ) {
      return false;
    }
  }

  return true;
}

console.log(permutationArray([3, 1, 2], 3));
console.log(permutationArray([3, 1, 2, 4, 5], 5));
console.log(permutationArray([0, 3, 1, 2], 3));
console.log(permutationArray([4, 3, 1, 2], 3));
console.log(permutationArray([3, 3, 2], 3));
