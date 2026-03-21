/*
114. Check String as Correct Sentence

Write a JavaScript program to check whether a given 
string represents a correct sentence or not. A string is 
considered a correct sentence if it starts with a capital 
letter and ends with a full stop (.) 
*/

function checkCorrectSentence(str) {
  let startsWithCapital = str[0] === str[0].toUpperCase();
  let endsWithDot =
    str[str.length - 1] === "." ||
    str[str.length - 1] === "?" ||
    str[str.length - 1] === "!";

  console.log(endsWithDot);

  return startsWithCapital && endsWithDot;
}

console.log(checkCorrectSentence("A cadeira quebrou!"));
