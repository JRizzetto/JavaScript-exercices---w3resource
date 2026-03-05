/*
53. Check 'a' and 'b' Separated by Exactly 3 Places

Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.
*/

function checkSeparated(str) {
  const letterA = "a";
  const letterB = "b";

  const strLower = str.toLowerCase();

  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i] === letterA && strLower[i + 4] === letterB) {
      return true;
    }

    if (strLower[i] === letterB && strLower[i + 4] === letterA) {
      return true;
    }
  }

  return false;
}

console.log(checkSeparated("Agua d b coco"));
