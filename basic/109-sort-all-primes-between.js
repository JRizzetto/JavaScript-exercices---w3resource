/*
109. Sort All Primes Between 1 and n

Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
*/

function primeNumber(num) {
  let primeList = [];
  let isPrime = true;

  for (let i = 2; i <= num; i++) {
    isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeList.push(i);
    }
  }

  return primeList;
}

// console.log(primeNumber(100));

let number = 20;

for (let i = 0; i < number; i++) {
  console.log(`${i} - ${Math.sqrt(i)}`);
}
