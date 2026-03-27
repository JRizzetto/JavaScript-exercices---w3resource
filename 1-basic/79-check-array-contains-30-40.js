/*
79. Check if Array Contains 30 and 40 Twice

Write a JavaScript program to test whether a given array 
of integers contains 30 and 40 twice. The array length should 
be 0, 1, or 2.  
*/

function checkArray(numbers) {
  if (numbers.length < 2) {
    return false;
  }

  let check30 = numbers[0] === 30 && numbers[1] === 30;
  let check40 = numbers[0] === 40 && numbers[1] === 40;

  return check30 || check40;
}

// console.log(checkArray([30, 30])); // Should return true
// console.log(checkArray([40, 40])); // Should return true
// console.log(checkArray([20, 20])); // Should return false
// console.log(checkArray([30])); // Should return false

function twice3040(array) {
  let a = array[0];
  let b = array[1];

  return (a === 30 && b === 30) || (a === 40 && b === 40);
}

console.log(twice3040([30, 30])); // Should return true
console.log(twice3040([40, 40])); // Should return true
console.log(twice3040([20, 20])); // Should return false
console.log(twice3040([30])); // Should return false
