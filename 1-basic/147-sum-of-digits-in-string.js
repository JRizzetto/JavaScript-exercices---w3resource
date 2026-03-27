/*
147. Sum of Digits in String

Write a JavaScript program to compute the sum of all the digits that occur in a given string.
*/

function sumStringDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      sum += parseInt(str[i]);
    }
  }

  return sum;
}

console.log(sumStringDigits("abcd12efg9"));
console.log(sumStringDigits("w3resource"));
