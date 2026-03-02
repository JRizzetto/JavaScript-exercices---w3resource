/*
31. Find Largest of Three Integers

Write a JavaScript program to find the largest of three given integers.
*/

function largestNumber(n1, n2, n3) {
  let maior = n1;

  if (n2 > maior) maior = n2;
  if (n3 > maior) maior = n3;

  return maior;
}

console.log(largestNumber(80, 100, 100));
