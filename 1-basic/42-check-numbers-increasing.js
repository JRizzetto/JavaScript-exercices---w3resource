/*
42. Check Numbers in Strict or Soft Increasing Mode

Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31
*/

function strictOrSoft(first, second, third) {
  if (first < second && second < third) {
    return `Strict mode`;
  } else if (first >= second && third > second) {
    return `Soft mode`;
  } else {
    return "Not increasing";
  }
}

console.log(strictOrSoft(30, 20, 35));
