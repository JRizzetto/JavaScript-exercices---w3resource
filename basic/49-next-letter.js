/*
49. Replace Each Character with Next Alphabet Letter

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

function changeNextLetter(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let newtext = "";

  for (let i = 0; i <= text.length - 1; i++) {
    if (text[i] === alphabet[y]) {
      newtext += alphabet[y + 1];
    }
  }

  return newtext;
}

console.log(changeNextLetter("abcde"));
