/*
134. Reverse Alphabetical Order of Lowercase Letters

Write a JavaScript program to change the characters (lower case) 
in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
*/

function alphabeticalOrder(str) {
  let a = "a".charCodeAt(0);
  let z = "z".charCodeAt(0);

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let count = z - str[i].charCodeAt(0);

    newStr += String.fromCharCode(a + count);
  }

  return newStr;
}

console.log(alphabeticalOrder("xyz"));
