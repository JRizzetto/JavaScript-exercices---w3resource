/*
59. Extract First Half of Even-Length String

Write a JavaScript program to extract the first half of a even string.  
*/

function firstHalf(str) {
  if (str.length % 2 != 0) {
    return false;
  }

  return str.substring(0, str.length / 2);
}

// console.log(firstHalf("JavaScript"));

function halfString(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }

  return str;
}

console.log(halfString("JavaScript"));
