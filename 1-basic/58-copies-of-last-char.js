/*
58. Four Copies of Last 3 Characters

Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.  
*/

function lastCharacter(str) {
  if (str.length <= 3) {
    return false;
  }

  return str.slice(-3).repeat(4);
}

// console.log(lastCharacter("Jefferson"));

function lastChar(str) {
  if (str.length <= 3) {
    return false;
  }

  let resultSub = str.substring(str.length - 3);

  return resultSub + resultSub + resultSub;
}

console.log(lastChar("Jefferson"));
