/*
18. Check if Number or Sum is 50

Write a JavaScript program to check a pair of numbers and 
return true if one of the numbers is 50 or if their sum is 50. 
*/

function checkNumbersSum(n1, n2) {
  let resultNumber = n1 + n2;

  if (resultNumber === 50 || n1 === 50 || n2 === 50) {
    return true;
  }

  return false;
}

console.log(checkNumbersSum(20, 20));
