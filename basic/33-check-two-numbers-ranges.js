/*
33. Check if Two Numbers are in Specific Ranges

Write a JavaScript program to check whether two numbers are in the range 
40..60 or 70..100 inclusive.  
*/

function checkRange(first, second) {
  let firstRange =
    (first >= 40 && first <= 60) || (first >= 70 && first <= 100);

  let secondRange =
    (second >= 40 && second <= 60) || (second >= 70 && second <= 100);

  return firstRange || secondRange;
}

console.log(checkRange(20, 90));
