/*
31. Find Largest of Three Integers

Write a JavaScript program to find the largest of three given integers.
*/

function largestNumber(first, second, third) {
  let max = first;

  if (second > max) max = second;
  if (third > max) max = third;

  return max;
}

console.log(largestNumber(8, 8, 5));
