/*
145. Max n for 1+2+...+n = Value

Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer. 
*/

function maxTargetValue(target) {
  let sum = 0;
  let maxInteger = 0;

  for (let i = 1; sum <= target; i++) {
    sum += i;
    if (sum <= target) {
      maxInteger = i;
    }
  }

  return maxInteger;
}

console.log(maxTargetValue(10));
console.log(maxTargetValue(15));
console.log(maxTargetValue(1));
console.log(maxTargetValue(6));
console.log(maxTargetValue(0));
