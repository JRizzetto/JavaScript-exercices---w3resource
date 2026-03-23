/*
128. Find Smallest Round Number = Value

Write a JavaScript program to find the smallest round number not less than a given value. 
Note: A round number is informally considered to be an integer that ends with one or more zeros.[3] So, 590 is rounder than 592, but 590 is less round than 600.
*/

function smallestRoundNumber(num) {
  while (num % 10 !== 0) {
    num++;
  }

  return num;
}

// console.log(smallestRoundNumber(592));
// console.log(smallestRoundNumber(590));
// console.log(smallestRoundNumber(2));
// console.log(smallestRoundNumber(999));

function nearest_round_number(num) {
  return Math.ceil(num / 10) * 10;
}

console.log(smallestRoundNumber(592));
console.log(smallestRoundNumber(590));
console.log(smallestRoundNumber(2));
console.log(smallestRoundNumber(999));
