/*
76. Create Array with First/Last Elements from Array

Write a JavaScript program to create an array by taking the first 
and last elements from a given array of integers. The length must 
be larger than or equal to 1. 
*/

function createNewArray(array) {
  if (array.length >= 1) {
    let newArray = [];
    const firstChar = array[0];
    const lastChar = array[array.length - 1];

    newArray.push(firstChar, lastChar);

    return newArray;
  }

  return false;
}

console.log(createNewArray([20, 20, 30])); // Output: [20, 30]
console.log(createNewArray([5, 2, 7, 8])); // Output: [5, 8]
console.log(createNewArray([17, 12, 34, 78])); // Output: [17, 78]
