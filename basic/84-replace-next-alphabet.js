/*
84. Replace Characters with Next in Alphabet

Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.
*/

function replaceChar(str) {
  let textArray = str.split("");

  for (let i = 0; i < textArray.length; i++) {
    // console.log(String.fromCharCode(1 + textArray[i].charCodeAt(0)));
    switch (textArray[i]) {
      case " ":
        break;
      case "z":
        textArray[i] = "a";
        break;
      case "Z":
        textArray[i] = "A";
        break;
      default:
        textArray[i] = String.fromCharCode(1 + textArray[i].charCodeAt(0));
    }
  }

  return textArray;
}

// console.log(replaceChar("abcdz"));

function alphabet_char_Shift(str) {
  let all_chars = str.split("");

  for (let i = 0; i < all_chars.length; i++) {
    let n = all_chars[i].charCodeAt() - "a".charCodeAt();
    n = (n + 1) % 26;
    all_chars[i] = String.fromCharCode("a".charCodeAt() + n);
  }

  return all_chars.join("");
}
console.log(alphabet_char_Shift("abcdxyz"));
