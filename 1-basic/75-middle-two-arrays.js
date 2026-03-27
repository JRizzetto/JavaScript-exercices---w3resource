/*
75. Create Array with Middle Elements from Two Arrays

Write a JavaScript program to create an array taking the middle 
elements of the two arrays of integer and each length 3.  
*/

function middleArray(array1, array2) {
  if (array1.length === 3 && array2.length === 3) {
    return [array1[1], array2[1]];
  }
}

console.log(middleArray([1, 2, 3], [5, 6, 7]));
