/*
132. Find Distinct Prime Factors of Integer

Write a JavaScript program to find all distinct prime factors of a given integer. 
*/

function primeFactors(num) {
  let factorList = [];
  let number = num;

  for (let i = 2; number > 1; i++) {
    while (number % i === 0) {
      number = number / i;
      if (!factorList.includes(i)) {
        factorList.push(i);
      }
    }
  }

  return factorList;
}

console.log(primeFactors(100));
