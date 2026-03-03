/*
35. Check Character Between 2nd and 4th Positions in String

Write a program to check whether a specified character exists between 
the 2nd and 4th positions in a given string. 
*/

function checkCharacter(string, char) {
  let start = 2 - 1;
  let end = 4 - 1;

  // Looping to check characters
  for (let i = start; i <= end; i++) {
    if (string[i] === char) {
      return true;
    }
  }

  return false;
}

console.log(checkCharacter("JavaScript", "j"));
