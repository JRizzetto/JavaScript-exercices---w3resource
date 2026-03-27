/*
6. Find Prime Numbers Within a Range
Write a program in C++ to find a prime number within a range.

Input number for starting range: 1
Input number for ending range: 100
The prime numbers between 1 and 100 are:
2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
The total number of prime numbers between 1 to 100 is: 25
*/

function primeNumber(starting, ending) {
  const numbers = [];

  for (let i = starting; i <= ending; i++) {
    let flag = true;

    for (let y = 2; y < i; y++) {
      if (i % y === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      numbers.push(i);
    }
  }

  return numbers;
}

const result = primeNumber(1, 20);
console.log(result);
