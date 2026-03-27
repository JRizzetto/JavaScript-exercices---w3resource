/*
90. Find kth Greatest Element in Array

Write a JavaScript program to find the kth greatest element in a given array of integers. 
*/

function greatestElement(numbers, k) {
  let newArray = [...numbers].sort((a, b) => b - a);

  return newArray[k - 1];
}

// console.log(greatestElement([1, 2, 6, 4, 5], 3));

function Kth_greatest_in_array(arr, k) {
  for (let i = 0; i < k; i++) {
    let max_index = i;
    let tmp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr;
}

console.log(Kth_greatest_in_array([1, 2, 6, 4, 5], 5));
// console.log(Kth_greatest_in_array([-10, -25, -47, -36, 0], 1)); // 0
