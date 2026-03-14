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

// console.log(palindromeString("race"));
// console.log(palindromeString("ab"));
// console.log(palindromeString("abc"));
// console.log(palindromeString("abba"));
// console.log(palindromeString("abcd"));

function build_Palindrome(new_str) {
  let flag;

  for (let i = new_str.length; ; i++) {
    flag = true;

    for (let j = 0; j < i - j - 1; j++) {
      if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      for (let j = new_str.length; j < i; j++) {
        new_str += new_str[i - j - 1];
      }
      return new_str;
    }
  }
}

// console.log(build_Palindrome("abcddc")); // Output the result for the given string
// console.log(build_Palindrome("122")); // Output the result for the given string
console.log(build_Palindrome("race"));
