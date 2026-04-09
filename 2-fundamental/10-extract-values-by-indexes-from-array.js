/*
10. Extract Values by Indexes from Array

Write a JavaScript program to extract values at specified indexes from a specified array.

Use Array.prototype.filter() and Array.prototype.includes() to pull out the values that are not needed.
Set Array.prototype.length to mutate the passed in an array by resetting its length to 0.
Use Array.prototype.push() to re-populate it with only the pulled values.
Use Array.prototype.push() to keep track of pulled values.
*/

const pull_at_Index = (arr, target) => {
  const result = target.map((value) => {
    return arr[value];
  });

  return result;
};

// Test cases
let arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(arra1, [1, 3])); // Output: ['b', 'd']

let arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4])); // Output: [5]
