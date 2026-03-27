/*
133. Check if Fraction is Proper

Write a JavaScript program to check whether a given fraction is proper or not. 
Note: There are two types of common fractions, proper or improper. When the numerator 
and the denominator are both positive, the fraction is called proper if the numerator 
is less than the denominator, and improper otherwise.
*/

function fractionProper(num) {
  return Math.abs(num) > 0 && Math.abs(num) < 1;
}

console.log(fractionProper(2 / 3));
console.log(fractionProper(1 / 4));
console.log(fractionProper(7 / 10));

console.log(fractionProper(5 / 3));
console.log(fractionProper(8 / 4));
console.log(fractionProper(-10 / 7));
