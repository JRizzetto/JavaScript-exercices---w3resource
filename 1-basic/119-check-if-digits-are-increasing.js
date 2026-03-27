/*
119. Check if Digits in Integer Are Increasing

Write a JavaScript program to check if a given integer has an increasing digit sequence. 
*/

function increseIntegers(num) {
  let numStr = num.toString();

  for (let i = 0; i < numStr.length - 1; i++) {
    if (numStr[i] > numStr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(increseIntegers(123456));
