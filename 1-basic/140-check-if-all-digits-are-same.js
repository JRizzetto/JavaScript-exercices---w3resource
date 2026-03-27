/*
140. Check if All Digits in Number Are Same

Write a JavaScript program to check whether all the digits in a given number are the same or not. 
*/

function digitsAreSame(num) {
  let countStr = num.toString();

  for (let i = 0; i < countStr.length - 1; i++) {
    if (countStr[i] !== countStr[i + 1]) {
      return false;
    }
  }

  return true;
}

// console.log(digitsAreSame(1234));
// console.log(digitsAreSame(1111));

function test_same_digit(num) {
  let first = num % 10;

  while (num) {
    if (num % 10 !== first) return false;
    num = Math.floor(num / 10);
  }

  return true;
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
