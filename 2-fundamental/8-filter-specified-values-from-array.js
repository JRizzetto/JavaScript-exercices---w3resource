/*
8. Filter Specified Values from Array

Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.

Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
Use Array.prototype.push() to re-populate it with only the pulled values.
*/

const pull = (arr, ...args) => {
  const result = arr.filter((el) => {
    if (!args.includes(el)) {
      return el;
    }
  });

  arr.length = 0;

  arr.push(...result);

  return arr;
};

// Test cases
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c")); // Output: ['b', 'b']

let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b")); // Output: ['a', 'c', 'a', 'c']
