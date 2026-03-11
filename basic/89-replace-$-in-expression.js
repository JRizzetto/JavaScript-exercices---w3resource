/*
89. Replace $ in Expression to Make True

Write a JavaScript program to check whether it is possible to replace $ in a given 
expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z
*/

function checkOperator(x, y, z) {
  if (x * y === z) return true;
  if (x / y === z) return true;
  if (x + y === z) return true;
  if (x - y === z) return true;

  return false;
}

console.log(checkOperator(10, 30, 300));
