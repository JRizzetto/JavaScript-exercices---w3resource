/*
143. Sort Strings by Increasing Length

Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
Note: Do not change the order if the lengths of two string are same.
*/

// function sortStringLength(arr) {
//   let sortList = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i].length > arr[j].length) {
//         let m = arr[i];
//         arr[i] = arr[j];
//         arr[j] = m;
//       }
//     }
//   }

//   return arr;
// }

function sortStringLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let currently = arr[i];

        arr[i] = arr[j];
        arr[j] = currently;
      }
    }
  }

  return arr;
}

console.log(sortStringLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));
