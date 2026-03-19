/*
105. Replace Number with Digit Sum Until Single Digit

Write a JavaScript program to find the number of times 
to replace a given number with the sum of its digits. 
This is until it converts to a single-digit number. 
*/

function singleDigit(num) {
  let result = 0;

  while (num > 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  if (result >= 10) {
    return singleDigit(result);
  }

  return result;
}

console.log(singleDigit(123));
console.log(singleDigit(156));
