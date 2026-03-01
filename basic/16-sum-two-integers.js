/*
16. Sum Two Integers (Triple if Equal)

Write a JavaScript program to compute the sum of the 
two given integers. If the two values are the same, 
then return triple their sum.
*/

function sumTwoIntegers(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  }

  return n1 + n2;
}

console.log(sumTwoIntegers(10, 10));
