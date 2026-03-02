/*
30. Remove 'Script' from String at 5th Position

Write a JavaScript program to check whether a string "Script" 
appears at the 5th (index 4) position in a given string. If "Script" 
appears in the string, return the string without "Script" otherwise 
return the original one.
*/

function removeScript(word) {
  let script = "Script";
  let text = word.substring(4, script.length + 4);

  if (text === script) {
    return (
      word.substring(0, 4) + word.substring(script.length + 4, word.length)
    );
  }

  return word;
}
console.log(removeScript("JavaScripting"));
