/*
9. Days Left Before Christmas

Write a JavaScript program to calculate the days left before Christmas. 
*/

function daysLeft() {
  let current = new Date();
  let count = 0;

  const year = current.getFullYear();

  let daysLeft = new Date(year, 11, 25) - current;

  count = Math.ceil(daysLeft / (1000 * 60 * 60 * 24));

  return count;
}

const daysLeftChristmas = daysLeft();
console.log(`Left ${daysLeftChristmas} to Christmas`);
