/*
101. Check Latin Letters with No Adjacent Upper/Lower Case

Write a JavaScript program to check whether a given string contains 
only Latin letters and no two uppercase and no two lowercase letters 
are in adjacent positions. 
*/

function checklatinLetters(arr) {
  const isLowerCase = function (symbol) {
    if (symbol >= "a" && symbol <= "z") {
      return true;
    } else {
      return false;
    }
  };

  const isUpperCase = function (symbol) {
    if (symbol >= "A" && symbol <= "Z") {
      return true;
    } else {
      return false;
    }
  };

  const isFirstCharLower = isLowerCase(arr[0]); // true
  const isFirstCharUpper = isUpperCase(arr[0]); // false

  if (!(isFirstCharLower || isFirstCharUpper)) {
    return false;
  }

  for (let i = 1; i < arr.length; i++) {
    if (i % 2) {
      if (
        isLowerCase(arr[i]) === isFirstCharLower ||
        isUpperCase(arr[i]) === isFirstCharUpper
      ) {
        return false;
      }
    } else {
      if (
        isLowerCase(arr[i]) !== isFirstCharLower ||
        isUpperCase(arr[i]) !== isFirstCharUpper
      ) {
        return false;
      }
    }
  }

  return true;
}

console.log(checklatinLetters("xYr")); // Example usage
console.log(checklatinLetters("XXyx")); // Example usage
