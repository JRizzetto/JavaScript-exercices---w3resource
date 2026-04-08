/*
7. Number to Array of Digits

Write a JavaScript program to convert a specified number into an array of digits.

Note: Convert the number to a string, using the spread operator (...) to build an array.

Use Math.abs() to strip the number's sign.
Convert the number to a string, using the spread operator (...) to build an array.
Use Array.prototype.map() and parseInt() to transform each value to an integer.
*/

const digitize = (num) => {
  let positiveNumber = Math.abs(num).toString();
  let listNumbers = [...positiveNumber];

  let result = listNumbers.map((v) => {
    return Number(v);
  });

  return result;
};

// console.log(digitize(123)); // Output: [1, 2, 3]
// console.log(digitize(-1230)); // Output: [1, 2, 3, 0]
