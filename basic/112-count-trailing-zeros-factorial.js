/*
112. Count Trailing Zeros in Factorial

Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 
*/

function trailingFacorail(num) {
  let facNum = 1;

  for (let i = 5; i <= num; i += 5) {
    num = i;

    while (num % 5 === 0) {
      num /= 5;
      facNum++;
    }
  }

  return facNum;
}

console.log(trailingFacorail(8));
console.log(trailingFacorail(12));
console.log(trailingFacorail(17));
console.log(trailingFacorail(21));
console.log(trailingFacorail(26));
