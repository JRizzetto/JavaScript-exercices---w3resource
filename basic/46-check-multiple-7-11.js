/*
46. Check if Only One Integer is Multiple of 7 or 11
Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 
*/

function checkMultiple(first, second) {
  if (first < 0 || second < 0) {
    return false;
  }

  let isFirstValid = first % 7 === 0 || first % 11 === 0;
  let isSecondValid = second % 7 === 0 || second % 11 === 0;

  return (isFirstValid && !isSecondValid) || (!isFirstValid && isSecondValid);
}

console.log(checkMultiple(9, 11));
