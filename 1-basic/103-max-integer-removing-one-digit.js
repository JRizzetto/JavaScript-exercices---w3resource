/*
103. Max Integer by Removing One Digit

Write a JavaScript program to find the maximum number of a given positive integer by deleting exactly one digit of the given number.
*/

function maxInteger(number) {
  let result = 0;
  let newArr = []; // [ 9, 5, 1 ]

  while (number) {
    newArr.push(number % 10);
    number = Math.floor(number / 10);
  }

  for (let i = 0; i < newArr.length; i++) {
    let n = 0;

    for (let j = newArr.length - 1; j >= 0; j--) {
      if (i !== j) {
        n = n * 10 + newArr[j];
      }
    }
    result = Math.max(result, n);
  }

  return result;
}

console.log(maxInteger(159));
