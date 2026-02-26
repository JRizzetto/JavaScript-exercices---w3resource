/*
5. Rotate String 'w3resource' Periodically

Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically removing one letter from the string end and attaching it 
to the front.  
*/

let string = "w3resource";
let control = 0;

function rotateRight() {
  if (control >= string.length - 1) {
    clearInterval(idInterval);
  }

  let lastWord = string[string.length - 1];
  const removeWord = string.slice(0, -1);
  string = lastWord + removeWord;
  console.log(string);

  control++;
}

const idInterval = setInterval(rotateRight, 1000);
