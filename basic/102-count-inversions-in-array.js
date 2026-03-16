/*
102. Count Inversions in Array

Write a JavaScript program to find the number of inversions of a given array of integers. 
Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.
*/

function checkinversions(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(checkinversions([2, 4, 1, 3]));
console.log(checkinversions([5, 4, 3, 2, 1]));
console.log(checkinversions([1, 2, 3, 4, 5]));
