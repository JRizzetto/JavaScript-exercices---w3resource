/*
9. All Combinations from Array of Numbers

Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

Use Array.prototype.reduce() combined with Array.prototype.map() to iterate over elements and combine into an array containing all combinations.
*/

const powerset = (arr) => {
  const result = arr.reduce(
    (acc, el) => {
      acc = el;

      return acc;
    },
    [[]],
  );

  return result;
};

// Test cases
console.log(powerset([1, 2])); // [[],[1],[2],[2,1]]
// console.log(powerset([1, 2, 3])); // [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]
// console.log(powerset([1, 2, 3, 4])); // [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1],[4],[4,1],[4,2],[4,2,1],[4,3],[4,3,1],[4,3,2],[4,3,2,1]]
