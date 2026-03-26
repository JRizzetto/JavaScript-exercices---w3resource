/*
141. Find Number of Elements in Both Arrays

Write a JavaScript program to find the number of elements in both arrays.
*/

function findElementsArrays(arr1, arr2) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(findElementsArrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(findElementsArrays([1, 2, 3, 4], [1, 2, 3, 4])); // Output: 4
console.log(findElementsArrays([1, 2, 3, 4], [1, 2, 3, 5])); // Output: 3
console.log(findElementsArrays([1, 2, 3, 4], [11, 22, 33, 44])); // Output: 0
