/*
115. Check if Matrix is Diagonal Matrix

Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
In linear algebra, a diagonal matrix is a matrix in which the entries outside the main 
diagonal are all zero (the diagonal from the upper left to the lower right). 
Example:
[1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
[1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false
*/

function checkMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    // if (!arr[i][i]) return false;

    for (let j = 0; j < arr[i].length; j++) {
      if (i !== j && arr[i][j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  checkMatrix([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ]),
);

console.log(
  checkMatrix([
    [1, 0],
    [0, 5],
  ]),
);

console.log(
  checkMatrix([
    [1, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 3, 0],
    [0, 0, 0, 4],
  ]),
);

console.log(
  checkMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ]),
);
