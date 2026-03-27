/*
22. Remove Character at Specified Position in String

Write a JavaScript program to remove a character at the 
specified position in a given string and return the modified string. 
*/

function removeCharacter(string, position) {
  if (position > string.length - 1) {
    return `Choose between 0 to ${string.length - 1} characteres`;
  }

  const newText = string.slice(0, position) + string.slice(position + 1);

  return newText;
}

console.log(removeCharacter("Jefferson", 5));
