/*
87. Check if Two Arrays Are Similar with One Swap

Write a JavaScript program to determine if two arrays 
of integers of the same length are similar. The arrays 
will be similar if one array can be obtained from another 
array by swapping at most one pair of elements.  
*/

function similarArrays(array1, array2) {
  if (array1.length != array2.length) return false;

  let diff = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] != array2[i]) diff.push(i);
  }

  if (diff.length === 0) return true;
  if (diff.length != 2) return false;

  const [a, b] = diff;

  return array1[a] === array2[b] && array1[b] === array2[a];
}

console.log(similarArrays([10, 20, 30, 40, 50], [10, 20, 30, 40, 50]));
console.log(similarArrays([10, 20, 30, 40, 50], [10, 30, 20, 40, 50]));
console.log(similarArrays([10, 20, 30, 50, 40], [10, 30, 20, 40, 50]));
console.log(similarArrays([10, 20, 30, 80, 40], [10, 30, 20, 40, 50]));
console.log(similarArrays([1, 2], [2, 3]));
console.log(similarArrays([1, 2], [1, 2, 3]));
console.log(similarArrays([1, 2, 3], [1, 3, 4]));
console.log(similarArrays([1, 1, 2], [1, 2, 2]));
