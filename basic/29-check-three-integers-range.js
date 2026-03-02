/*
29. Check if Three Integers are in Range 50?99

Write a JavaScript program to check whether three given 
integer values are in the range 50..99 (inclusive). Return 
true if one or more of them are in the specified range.
*/

function checkThreeNumber(n1, n2, n3) {
  let range50 = 50;
  let range99 = 99;

  return (
    (n1 >= range50 && n1 <= range99) ||
    (n2 >= range50 && n2 <= range99) ||
    (n3 >= range50 && n3 <= range99)
  );
}

console.log(checkThreeNumber(40, 100, 80));
