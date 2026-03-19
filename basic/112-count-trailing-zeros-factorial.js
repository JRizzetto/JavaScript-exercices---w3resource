/*
112. Count Trailing Zeros in Factorial

Write a JavaScript program to find the number of trailing zeros in the decimal representation of the factorial of a given number. 
*/

function trailingFacorail(num) {
  let facNum = 1;

  for (let i = num; i > 0; i--) {
    facNum *= i;
  }

  //   let facString = facNum.toString();
  //   let count = 0;

  //   for (let j = facString.length - 1; j > 0; j--) {
  //     if (facString[j] == 0) {
  //       count++;
  //     } else {
  //       return count;
  //     }
  //   }

  return facNum;
}

console.log(trailingFacorail(5));
console.log(trailingFacorail(10));
console.log(trailingFacorail(15));
console.log(trailingFacorail(20));
