/*
32. Find Closest Value to 100 from Two Numbers

Write a JavaScript program to find the closest value to 100 from two numerical values.  
*/

function closestValue(first, second) {
  let target = 100;
  let closest = first;

  let restFirst = Math.abs(first - target);
  let restSecond = Math.abs(second - target);

  if (restSecond < restFirst) closest = second;

  if (restSecond === restFirst) {
    return 0;
  }

  return closest;
}

console.log(closestValue(110, 120));
