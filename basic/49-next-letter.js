/*
49. Replace Each Character with Next Alphabet Letter

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

// function changeNextLetter(text) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   let newText = "";

//   for (let i = 0; i < text.length; i++) {
//     let index = alphabet.search(text[i]);

//     if (index < 0) {
//       newText += text[i];
//     } else if (index === 25) {
//       newText += alphabet[0];
//     } else {
//       newText += alphabet[index + 1];
//     }
//   }

//   return newText;
// }

// console.log(changeNextLetter("abcdez1"));

// console.log("a".charCodeAt(0));
// console.log("b".charCodeAt(0));
// console.log("c".charCodeAt(0));

function changeNextLetter(text) {
  let newtext = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if ((char >= "a" && char <= "y") || (char >= "A" && char <= "Y")) {
      newtext += String.fromCharCode(char.charCodeAt(0) + 1);
    } else if (char === "z" || char === "Z") {
      char === "z" ? (newtext += "a") : (newtext += "A");
    } else {
      newtext += char;
    }
  }

  return newtext;
}

console.log(changeNextLetter("aBcDe1"));
