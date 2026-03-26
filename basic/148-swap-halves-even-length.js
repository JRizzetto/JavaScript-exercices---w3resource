/*
148. Swap Halves of Even-Length Array

Write a JavaScript program to swap two halves of a given array of integers of even length.
*/

function swapHalveArray(arr) {
  if (arr.length % 2 !== 0) {
    return false;
  }

  let halfStr = Math.floor((arr.length - 1) / 2);

  console.log(halfStr);

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log(swapHalveArray([1, 2, 3, 4, 5, 6]));
