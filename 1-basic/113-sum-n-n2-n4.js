/*
113. Sum n + n/2 + n/4 + ...

Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 
*/

function sumDividedIntegers(num) {
  let sum = 0;

  while (num) {
    sum += num;
    num = Math.floor(num / 2);
  }

  return sum;
}

console.log(sumDividedIntegers(8));
