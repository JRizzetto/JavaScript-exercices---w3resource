/*
54. Count Vowels in String

Write a JavaScript program to count the number of vowels in a given string. 
*/

function countVowels(str) {
  return str.replace(/[^aáâãàeéêiíoóôõuú]/gi, "").length;
}

console.log(countVowels("Jefferson"));
