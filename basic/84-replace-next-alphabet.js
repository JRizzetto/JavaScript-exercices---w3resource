/*
84. Replace Characters with Next in Alphabet

Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function replaceChar(str) {
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case " ":
        break;
      case "z":
        str[i] = "a";
        break;
      case "Z":
        str[i] = "A";
        break;
      default:
        str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
  }

  return str;
}

console.log(replaceChar("abcdz"));
