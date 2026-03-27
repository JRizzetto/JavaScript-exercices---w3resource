/*
34. Find Larger Number in Range 40?60

Write a JavaScript program to find the largest number from the two given positive integers. 
The two numbers are in the range 40..60 inclusive.  
*/

function rangeNumber(first, second) {
  // Positive integers
  if (first <= 0 || second <= 0) {
    return 0;
  }

  function checkNumber(number) {
    return number > 40 && number < 60;
  }

  if (checkNumber(first) && checkNumber(second)) {
    return first > second ? first : second;
  }

  return 0;
}

console.log(rangeNumber(50, 45));
