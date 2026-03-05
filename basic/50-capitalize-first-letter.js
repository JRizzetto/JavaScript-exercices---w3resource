/*
50. Capitalize First Letter of Each Word in String

Write a JavaScript program to capitalize the first letter of each word in a given string. 
*/

function capitalizeFirstLetter(text) {
  if (!text || typeof text === "number") {
    return false;
  }

  let words = text.trim().split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

console.log(capitalizeFirstLetter(10));
