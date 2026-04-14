/*
12. Remove Non-Printable ASCII from String

Write a JavaScript program to remove non-printable ASCII characters from a given string.

Use String.prototype.replace() with a regular expression to remove non-printable ASCII characters.
*/

const remove_non_ASCII = (str) => {
  let newStr = str.replace(/[^\x20-\x7E]/g, "");

  return newStr;
};

console.log(remove_non_ASCII("äÄçÇéÉêw3resouröceÖÐþúÚ")); // Output: w3resource
