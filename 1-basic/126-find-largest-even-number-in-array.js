/*
126. Find Largest Even Number in Array

Write a JavaScript program to get the largest even number from an array of integers. 
*/

function largestEvenNumber(arr) {
  let largestEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestEven && arr[i] % 2 === 0) {
      largestEven = arr[i];
    }
  }

  return largestEven;
}

// console.log(largestEvenNumber([1, 2, 40, 200, 201]));

function max_even(arr) {
  arr.sort((x, y) => y - x);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));
