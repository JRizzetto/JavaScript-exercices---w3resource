/*
108. Dot Product of Two 3D Vectors

Write a JavaScript program to create the dot products of two given 3D vectors. 
Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.
*/

function productVectors(arr1, arr2) {
  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] * arr2[i];
  }

  return result;
}

console.log(productVectors([1, 2, 3], [4, 5, 6]));
console.log(productVectors([2, 4, 6], [1, 1, 1]));
console.log(productVectors([0, 0, 0], [5, 10, 15]));
console.log(productVectors([-1, 2, -3], [4, -5, 6]));
