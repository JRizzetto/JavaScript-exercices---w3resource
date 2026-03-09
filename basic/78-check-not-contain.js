/*
78. Check if Array Does Not Contain 1 or 3

Write a JavaScript program to test whether an 
array of integers of length 2 does not contain 1 or 3.  
*/

function checkNumbers(arr) {
  if (arr.length === 2) {
    let testCondicion = arr[0] === 1 || arr[1] === 3;

    return !testCondicion;
  }

  return false;
}

// console.log(checkNumbers([1, 5]));
// console.log(checkNumbers([5, 3]));
// console.log(checkNumbers([4, 8]));

function checkNumbers(arr) {
  if (arr.indexOf(1) === -1 && arr.indexOf(3) === -1) {
    return false;
  }

  return true;
}

console.log(checkNumbers([1, 5]));
console.log(checkNumbers([5, 3]));
console.log(checkNumbers([4, 8]));
