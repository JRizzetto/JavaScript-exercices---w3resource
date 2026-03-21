/*
117. Check if Matrix is Identity Matrix

Write a JavaScript program to check whether a given matrix is an identity matrix. 
Note: In linear algebra, the identity matrix, or sometimes ambiguously called a 
unit matrix, of size n is the n ? n square matrix with ones on the main diagonal and 
zeros elsewhere.

[[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
[[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false
*/

function checkMatrixIdentity(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if ((i !== j && arr[i][j]) || arr[i][i] !== 1) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  checkMatrixIdentity([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);

console.log(
  checkMatrixIdentity([
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
  ]),
);

console.log(
  checkMatrixIdentity([
    [1, 0, 0],
    [0, 1, 1],
    [0, 0, 1],
  ]),
);

console.log(
  checkMatrixIdentity([
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
);
