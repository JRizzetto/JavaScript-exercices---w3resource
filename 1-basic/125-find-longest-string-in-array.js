/*
125. Find Longest String in Array

Write a JavaScript program to find the longest string in a given array. 
*/

function longestString(arr) {
  let longest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }

  return longest;
}

console.log(longestString(["ab", "a", "abcd"]));
