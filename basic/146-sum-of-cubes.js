/*
146. Sum of Cubes from 1 to n

Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer. 
*/

function sumOfCubes(int) {
  let cube = 3;
  let sum = 1;

  for (let i = 2; i <= int; i++) {
    sum += i ** cube;
  }

  return sum;
}

console.log(sumOfCubes(5));
