/*
101. Check Latin Letters with No Adjacent Upper/Lower Case

Write a JavaScript program to check whether a given string contains 
only Latin letters and no two uppercase and no two lowercase letters 
are in adjacent positions. 
*/

function checklatinLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].charCodeAt(0) < 65 ||
      arr[i].charCodeAt(0) > 122 ||
      arr[i] === arr[i + 1]
    ) {
      return false;
    }
  }

  return true;
}

console.log(checklatinLetters("JeFfErSoN"));
