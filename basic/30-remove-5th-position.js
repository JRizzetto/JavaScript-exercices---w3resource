/*
30. Remove 'Script' from String at 5th Position

Write a JavaScript program to check whether a string "Script" 
appears at the 5th (index 4) position in a given string. If "Script" 
appears in the string, return the string without "Script" otherwise 
return the original one.
*/

function removeScript() {
  const string = "Check if there is Script in 5th position";
  const positionString = string.split(" ");

  if (positionString[4] === "Script") {
    console.log(positionString.join(" "));
  }

  return;
}

console.log(removeScript());
