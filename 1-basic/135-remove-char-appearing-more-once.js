/*
135. Remove Characters Appearing More Than Once

Write a JavaScript program to remove all characters from a given string that appear more than once.
*/

function removeChars(str) {
  let newStr = "";
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    flag = true;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i != j) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      newStr += str[i];
    }
  }

  return newStr;
}

// console.log(removeChars("abcdabcf"));

function remove_duplicate_chars(str) {
  let arr_char = str.split("");
  let result_arr = [];

  for (let i = 0; i < arr_char.length; i++) {
    console.log(str.indexOf(arr_char[i]));
    console.log(str.lastIndexOf(arr_char[i]));
    console.log("------------------------");
  }
}

// console.log(remove_duplicate_chars("abcdabcf"));
