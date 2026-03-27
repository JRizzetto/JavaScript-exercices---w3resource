/*
130. Count Even Digits in Integer

Write a JavaScript program to find the number of even digits in a given integer. 
*/

function countEven(num) {
  let countEven = 0;

  while (num) {
    countEven += num % 2 === 0;

    num = Math.floor(num / 10);
  }

  return countEven;
}

console.log(countEven(10));
console.log(countEven(1020));
console.log(countEven(102));
