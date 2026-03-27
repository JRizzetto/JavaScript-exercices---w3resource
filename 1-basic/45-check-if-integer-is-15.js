/*
45. Check if Integer is 15, or Sum/Difference is 15

Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.

*/

// FIRST WAY TO SOLVE
function checkIntegers(first, second) {
  let target = 15;

  let checkEqual = first === target || second === target;
  let sum = first + second === target;
  let difference = Math.abs(first - second) === target;

  return checkEqual || sum || difference;
}

console.log(checkIntegers(20, 5));

// SECOND WAY TO SOLVE
function checkIntegers(first, second) {
  return (
    first === 15 ||
    second === 15 ||
    first + second === 15 ||
    Math.abs(first - second) === 15
  );
}

console.log(checkIntegers(20, 5));
