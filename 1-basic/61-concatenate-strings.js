/*
61. Concatenate Two Strings Without First Character

Write a JavaScript program to concatenate two strings except for their first character.  
*/
function concatStrings(str1, str2) {
  if (str1.length >= 2 && str2.length >= 2) {
    return str1.slice(1) + str2.slice(2);
  }

  return (str1, str2);
}

// console.log(concatStrings("JavaScript", "Back-end"));

function concatenate(str1, str2) {
  let strOne = str1.substring(1);
  let strtwo = str2.substring(1);

  return strOne + strtwo;
}

console.log(concatenate("PHP", "JS"));
console.log(concatenate("A", "B"));
console.log(concatenate("AA", "BB"));
