/*
49. Replace Each Character with Next Alphabet Letter

Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

// function changeNextLetter(text) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";

//   let newText = "";

//   for (let i = 0; i < text.length; i++) {
//     let index = alphabet.search(text[i]);

//     console.log(i);
//     console.log(index);

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

function changeNextLetter(str) {
  const text = str.split("");

  for (let i = 0; i < str.length; i++) {
    switch (text[i]) {
      case " ":
        console.log(text[i]);
        break;
      case "z":
        console.log(text[i]);
        text[i] = "a";
        break;
      case "Z":
        console.log(text[i]);
        text[i] = "A";
        break;
      default:
        text[i] = String.fromCharCode(1 + text[i].charCodeAt(0));
    }

    switch (text[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        text[i] = text[i].toUpperCase();
    }
  }

  return text;
}

console.log(changeNextLetter("aBcDzZ1"));
