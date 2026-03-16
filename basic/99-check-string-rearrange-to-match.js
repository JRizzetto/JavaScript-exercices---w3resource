/*
99. Check if String Can Rearrange to Match Another

Write a JavaScript program to check whether it is possible to 
rearrange the characters of a given string. This is in such a 
way that it will become equal to another given string. 
*/

function rearrangeString(str1, str2) {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");

  return newStr1 === newStr2;
}

console.log(rearrangeString("listen", "silent"));
console.log(rearrangeString("hello", "world"));
console.log(rearrangeString("aabbcc", "abcabc"));
