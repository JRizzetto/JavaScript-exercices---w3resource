/*
20. Check if One Integer is Positive and One is Negative

Write a JavaScript program to check two given integers whether one is 
positive and another one is negative.
*/

function factor(n1, n2) {
  let number1 = n1 < 0 ? false : true;
  let number2 = n2 < 0 ? false : true;

  return `${n1} = ${number1} and ${n2} = ${number2}`;
}

console.log(factor(-10, 30));
