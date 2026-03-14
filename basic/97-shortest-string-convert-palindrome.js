/*
97. Shortest String to Convert into Palindrome

Write a JavaScript program to find the shortest possible string. 
This can be converted into a string and converted into a palindrome 
by adding characters to the end of it.
*/

function palindromeString(str) {
  let newStr = str;
  let sufix = "";

  for (let i = str.length - 2; i >= 0; i--) {
    let reverse = newStr.split("").reverse().join("");
    if (newStr === reverse) {
      return sufix;
    }

    newStr += str[i];
    sufix += str[i];
  }
}

console.log(palindromeString("race"));
console.log(palindromeString("ab"));
console.log(palindromeString("abc"));
console.log(palindromeString("abba"));
console.log(palindromeString("abcd"));
