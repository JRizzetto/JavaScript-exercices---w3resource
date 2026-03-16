/*
98. Change Case Minimally for Upper or Lower Case

Write a JavaScript program to change the case of the minimum number of letters to make a given string written in upper case or lower case. 
Fox example "Write" will be write and "PHp" will be "PHP"
*/

function changeMinimally(str) {
  let upperStr = 0;
  let lowerStr = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      upperStr++;
    } else {
      lowerStr++;
    }
  }

  if (upperStr > lowerStr) {
    return str.toUpperCase();
  }

  return str.toLowerCase();
}

console.log(changeMinimally("JEFferson"));
