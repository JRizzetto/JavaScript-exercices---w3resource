/*
64. Concatenate Strings with Matching Length

Write a JavaScript program to concatenate two strings and return the result. 
If the length of the strings does not match, then remove the characters from the longer string. 
*/

function concatenateLength(str1, str2) {
  if (str1 < str2) {
    return str1 + str2.slice(-str1.length);
  } else if (str1 > str2) {
    return str1.slice(-str2.length) + str2;
  } else {
    return str1 + str2;
  }
}

// console.log(concatenateLength("JS", "Python"));
// console.log(concatenateLength("Python", "JS"));
// console.log(concatenateLength("Python", "Script"));

function concateLength(str1, str2) {
  let lesser = Math.min(str1.length, str2.length);

  return (
    str1.substring(str1.length - lesser) + str2.substring(str2.length - lesser)
  );
}

console.log(concateLength("JS", "Python"));
console.log(concateLength("Python", "JS"));
console.log(concateLength("Python", "Script"));
