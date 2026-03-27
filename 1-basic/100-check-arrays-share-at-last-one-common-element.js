/*
100. Check if Arrays Share at Least One Common Element

Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers. 
*/

function checkCommonChar(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
      if (arr1[i] < arr2[j]) {
        break;
      }
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }

  return false;
}

// console.log(checkCommonChar([1, 3, 5, 8], [2, 4, 8, 10]));

function check_common_element(arr1, arr2) {
  let result = false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {
      result = true;
    }
  }

  return result;
}

console.log(check_common_element([1, 3, 5, 8], [2, 4, 9, 10]));
