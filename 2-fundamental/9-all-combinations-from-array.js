/*
9. All Combinations from Array of Numbers

Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.

Use Array.prototype.reduce() combined with Array.prototype.map() to iterate over elements and combine into an array containing all combinations.
*/

const powerset = (arr) => {
  const result = arr.reduce(
    (acc, el) => {
      const combineNumbers = acc.map((combination) => {
        return [...combination, el];
      });

      return [...acc, ...combineNumbers];
    },
    [[]],
  );

  return result;
};

// Test cases
// console.log(powerset([5, 6])); // [[],[1],[2],[2,1]]
// console.log(powerset([1, 2, 3])); // [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]
// console.log(powerset([1, 2, 3, 4])); // [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1],[4],[4,1],[4,2],[4,2,1],[4,3],[4,3,1],[4,3,2],[4,3,2,1]]

const powerset2 = (arr) => {
  const result = arr.reduce(
    (acc, el) => {
      const listCombine = acc.map((combined) => {
        return [...combined, el];
      });

      return [...acc, ...listCombine];
    },
    [[]],
  );

  return result;
};

console.log(powerset2([1, 2, 3])); // [[],[1],[2],[2,1],[3],[3,1],[3,2],[3,2,1]]
