/*
17. Difference Between Number and 19 (Triple if >19)

Write a JavaScript program to compute the absolute difference 
between a specified number and 19. Returns triple the absolute 
difference if the specified number is greater than 19. 
*/

function differenceNumbers(number) {
  let fixNumber = 19;
  let absoluteNumber = Math.abs(number - fixNumber);

  if (number > fixNumber) {
    return absoluteNumber * 3;
  }

  return absoluteNumber;
}

console.log(differenceNumbers(25));
