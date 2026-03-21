/*
121. Check if Matrix is Lower Triangular

Write a JavaScript program to check whether a given matrix is lower triangular or not. 
Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.
*/

function triangularMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j > i && arr[i][j] !== 0) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  triangularMatrix([
    [1, 0, 0, 0],
    [2, 1, 0, 0],
    [1, 3, 2, 0],
    [4, 5, 6, 2],
  ]),
);
