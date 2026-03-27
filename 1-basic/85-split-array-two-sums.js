/*
85. Split Array into Two Sums Alternating Elements

Write a JavaScript program to divide a given array of positive 
integers into two parts. First element belongs to the first part, 
second element belongs to the second part, and third element belongs 
to the first part and so on. Now compute the sum of two parts and store 
it in an array of size two. 
*/

function alternateElements(array) {
  let firstArray = 0;
  let secondArray = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      firstArray += array[i];
    } else {
      secondArray += array[i];
    }
  }

  return [firstArray, secondArray];
}

// console.log(alternateElements([1, 3, 6, 2, 5, 10]));

function alternate_Sums(arr) {
  let result = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) result[0] += arr[i];
    else {
      result[1] += arr[i];
    }
  }

  return result;
}

console.log(alternate_Sums([1, 3, 6, 2, 5, 10])); // Output: [14, 8]
