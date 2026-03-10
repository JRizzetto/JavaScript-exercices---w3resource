/*
80. Swap First and Last Elements in Array

Write a JavaScript program to swap the first and 
last elements of a given array of integers. 
The array length should be at least 1.
*/

function swapElements(list) {
  if (list.length < 2) {
    return false;
  }

  let newArray = [...list];

  newArray.pop();
  newArray.shift();
  newArray.unshift(list[list.length - 1]);
  newArray.push(list[0]);

  return newArray;
}

// console.log(swapElements([1, 2, 3, 4]));

function swap(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];

  return array;
}

// Example usage
console.log(swap([1, 2, 3, 4]));
console.log(swap([0, 2, 1]));
console.log(swap([3]));
