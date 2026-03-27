/*
150. Swap Adjacent Pairs in Even-Length Integer

Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length. 
*/

function swapAdjacentPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      let currently = arr[i];

      arr[i] = arr[i - 1];
      arr[i - 1] = currently;
    }
  }

  return arr;
}

// console.log(swapAdjacentPairs([1, 2, 3, 4]));

function swapAdjacentPairs1(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    let temp = arr[i];

    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }

  return arr;
}

console.log(swapAdjacentPairs1([1, 2, 3, 4]));
