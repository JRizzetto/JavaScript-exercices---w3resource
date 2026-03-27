/*
106. Divide Integers Until Result is Integer

Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result. 
*/

function divideIntegers(dividend, divisor) {
  while (dividend) {
    if (dividend % divisor === 0) {
      dividend = dividend / divisor;
    } else {
      return dividend;
    }
  }

  return dividend;
}

// console.log(divideIntegers(16, 2));
// console.log(divideIntegers(100, 5));
// console.log(divideIntegers(24, 2));
// console.log(divideIntegers(7, 2));
// console.log(divideIntegers(0, 5));

function divide_digit(num, d) {
  if (d === 1) {
    return num;
  } else {
    while (num % d === 0) {
      num /= d;
    }

    return num;
  }
}

console.log(divide_digit(-12, 2)); // Output: -3
console.log(divide_digit(13, 2)); // Output: 13
console.log(divide_digit(13, 1)); // Output: 13
