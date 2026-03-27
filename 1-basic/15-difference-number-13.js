/*
15. Difference Between Number and 13

Write a JavaScript program to get the difference between a given 
number and 13, if the number is broader than 13 return double the 
absolute difference.  
*/

function differenceNumber(number) {
  let fixNumber = 13;
  let result = Math.abs(number - fixNumber);

  if (number > fixNumber) {
    return result * 2;
  }

  return result;
}

console.log(differenceNumber(18));
