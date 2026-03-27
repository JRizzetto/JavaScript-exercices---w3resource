/*
88. Check Similarity of Two Integers with Divisor

Write a JavaScript program that takes two integers and a divisor. 
If the given divisor divides both integers and does not divide either, 
two specified integers are similar. Check whether two integers are similar or not. 
*/

function checkDivisors(n1, n2, divisor) {
  return (
    (n1 % divisor === 0 && n2 % divisor === 0) ||
    (n1 % divisor !== 0 && n2 % divisor !== 0)
  );
}

console.log(checkDivisors(10, 25, 5));
console.log(checkDivisors(12, 25, 5));
console.log(checkDivisors(12, 23, 5));
