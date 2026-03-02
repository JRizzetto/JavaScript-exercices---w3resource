/*
19. Check if Integer is Within 20 of 100 or 400

Write a JavaScript program to check whether a given integer 
is within 20 of 100 or 400.  
*/

function checkInteger(integer) {
  let number100 = Math.abs(integer - 100);
  let number400 = Math.abs(integer - 400);

  return number100 <= 20 || number400 <= 20;
}

console.log(checkInteger(70));
console.log(checkInteger(80));
console.log(checkInteger(110));
console.log(checkInteger(130));

console.log(checkInteger(370));
console.log(checkInteger(380));
console.log(checkInteger(410));
console.log(checkInteger(430));
