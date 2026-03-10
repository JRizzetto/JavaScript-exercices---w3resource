/*
83. Find Longest String in Array

Write a JavaScript program to find the longest string from a given array of strings.  
*/

function longestString(array) {
  let firstEl = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > firstEl.length) {
      firstEl = array[i];
    }
  }

  return firstEl;
}

// console.log(longestString(["Jana", "Suelen", "Jefferson", "Mãe", "Titia"]));

function longest_string(str_ara) {
  let max = str_ara[0].length;

  str_ara.map((e) => (max = e.length > max ? e.length : max));

  let result = str_ara.filter((e) => e.length === max);

  return result;
}

console.log(longest_string(["Jana", "Suelen", "Jefferson", "Mãe", "Titia"]));
