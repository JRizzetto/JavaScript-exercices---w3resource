/*
129. Find Smallest Prime > Value

Write a JavaScript program to find the smallest prime number strictly greater than a given number. 
*/

function smallestPrime(num) {
  let firstNum = num;
  let isPrime = true;

  while (num) {
    isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime === true && num > firstNum) {
      return num;
    }

    num++;
  }
}

console.log(smallestPrime(24));
console.log(smallestPrime(10));
console.log(smallestPrime(3));
console.log(smallestPrime(100));
console.log(smallestPrime(200));
console.log(smallestPrime(997));
