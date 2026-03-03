/*
36. Check if Last Digit of Three Integers is Same

Write a JavaScript program that checks whether the last 
digit of three positive integers is the same.
*/

function lastDigits(first, second, third) {
  // Positive integers
  if (first <= 0 || second <= 0 || third <= 0) {
    return 0;
  }

  return (
    String(first).slice(-1) === String(second).slice(-1) &&
    String(first).slice(-1) === String(third).slice(-1)
  );
}

console.log(lastDigits(10, 20, 30));
