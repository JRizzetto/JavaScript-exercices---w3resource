/*
20. Check if One Integer is Positive and One is Negative

Write a JavaScript program to check two given integers whether one is 
positive and another one is negative.
*/

function factor(n1, n2) {
  if ((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)) {
    return true;
  }

  return false;
}

console.log(factor(-10, 20));
