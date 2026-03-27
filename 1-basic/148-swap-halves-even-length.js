/*
148. Swap Halves of Even-Length Array

Write a JavaScript program to swap two halves of a given array of integers of even length.
*/

function swapHalveArray(arr) {
  if (arr.length % 2 !== 0) {
    return false;
  }

  let newArr = [];

  let halfStr = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (i < halfStr) {
      newArr.push(arr[i + halfStr]);
    } else {
      newArr.push(arr[i - halfStr]);
    }
  }

  return newArr;
}

// console.log(swapHalveArray([1, 2, 3, 4, 5, 6]));

function halv_array_swap(arr) {
  if (arr.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    let currently = arr[i];

    arr[i] = arr[i + arr.length / 2];
    arr[i + arr.length / 2] = currently;
  }

  return arr;
}

console.log(halv_array_swap([1, 2, 3, 4, 5, 6]));
