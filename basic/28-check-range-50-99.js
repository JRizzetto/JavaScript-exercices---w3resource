/*
28. Check if Two Integers are in Range 50?99

Write a JavaScript program to check whether two given integer 
values are in the range 50..99 (inclusive). Return true if either 
of them falls within the range. 
*/

function checkRange(n1, n2) {
  return (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99);
}
console.log(checkRange(50, 100));
