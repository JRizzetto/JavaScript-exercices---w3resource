/*
55. Check Equal Number of 'p's and 't's

Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  
*/

// function checkEqualNumbers(str) {
//   let countP = 0;
//   let countT = 0;

//   if (countP === 0)
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "p") countP++;
//       if (str[i] === "t") countT++;
//     }

//   return countP === countT;
// }

// console.log(checkEqualNumbers("pedra"));

function equalNumbers(str) {
  const strP = str.replace(/[^p]/gi, "");
  const strT = str.replace(/[^t]/gi, "");

  console.log(strP);
  console.log(strT);

  return strP.length === strT.length;
}

console.log(equalNumbers("patolinop"));
