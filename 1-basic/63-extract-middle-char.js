/*
63. Extract Middle 3 Characters from Odd-Length String

Write a JavaScript program to create a string using the middle three characters 
of a given string of odd length. The string length must be greater than or equal to three.  
*/

function middleChar(str) {
  if (str.length % 2 === 0) {
    return false;
  }

  let halsStr = Math.floor(str.length / 2);

  return str.slice(halsStr - 1, halsStr + 2);
}

console.log(middleChar("Jefferson"));
