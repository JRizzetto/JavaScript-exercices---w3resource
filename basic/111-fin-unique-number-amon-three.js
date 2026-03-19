/*
111. Find Unique Number Among Three

Write a JavaScript program to check a number from three given numbers where two numbers are equal. Find the third one. 
*/

function findUniqueNumber(arr) {
  let count = 0;
  let differenteNumber = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      count++;
      differenteNumber = arr[i];
    }
  }

  if (count === 2) {
    return `Not any numbers are equal`;
  } else {
    return differenteNumber;
  }
}

// console.log(findUniqueNumber([1, 2, 2]));
// console.log(findUniqueNumber([1, 2, 3]));

function find_third_number(x, y, z) {
  if (x !== y && y !== z && x !== z) {
    return "Three numbers are unequal.";
  }

  if (x === y) {
    return z;
  } else if (x === z) {
    return y;
  } else {
    return x;
  }
}

console.log(find_third_number(1, 2, 3));
console.log(find_third_number(2, 2, 3));
console.log(find_third_number(1, 2, 2));
console.log(find_third_number(3, 2, 3));
