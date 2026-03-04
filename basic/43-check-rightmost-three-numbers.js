/*
43. Check Rightmost Digits of Three Numbers

Write a JavaScript program to check from three given numbers (non negative integers) 
that two or all of them have the same rightmost digit. 
*/

function checkRightmost(first, second, third) {
  if (first < 0 || second < 0 || third < 0) {
    return false;
  }

  if (
    first % 10 === second % 10 ||
    first % 10 === third % 10 ||
    second % 10 === third % 10
  ) {
    return true;
  }

  return false;
}

console.log(checkRightmost(33, 53, 73));
