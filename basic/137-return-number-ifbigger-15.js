/*
137. Return Number if >15, Else 15

Write a JavaScript program to test whether a given integer is greater than 15 and return the given number, otherwise return 15. 
*/

function biggerThan(num) {
  if (num >= 15) {
    return num;
  } else {
    return 15;
  }
}

// console.log(biggerThan(15));
// console.log(biggerThan(20));
// console.log(biggerThan(10));

function test_fifteen(num) {
  while (num < 15) {
    num++;
  }

  return num;
}

console.log(test_fifteen(15));
console.log(test_fifteen(20));
console.log(test_fifteen(10));
