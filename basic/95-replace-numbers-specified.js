/*
95. Replace Numbers with Specified Value in Array

Write a JavaScript program to replace all numbers with
a specified number in an array of integers.
*/

function replaceNumbers(arr, oldValue, newValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      arr[i] = newValue;
    }
  }

  return arr;
}

// console.log(replaceNumbers([1, 2, 2, 3, 3, 4, 5, 6], 2, 5));

function replace_numbers(arr, oldValue, newValue) {
  const newArray = arr.map((num) => {
    if (num === oldValue) num = newValue;
    return num;
  });

  console.log(newArray);

  return;
}

console.log(replace_numbers([1, 2, 2, 3, 3, 4, 5, 6], 2, 5));
