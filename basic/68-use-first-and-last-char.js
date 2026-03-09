/*
68. Use First and Last 'n' Characters from String

Write a JavaScript program to create a new string using the first and last n characters from a given string. 
The string length must be larger than or equal to n.  
*/
function firstLast(str, int) {
  if (str.length < int) {
    return false;
  }

  return str.slice(0, int) + str.slice(str.length - int);
}

// console.log(firstLast("Jefferson", 2));

function twoString(str, n) {
  let firstPart = str.slice(0, n);
  let lastPart = str.slice(str.length - n);

  return firstPart + lastPart;
}

console.log(twoString("JavaScript", 3));
