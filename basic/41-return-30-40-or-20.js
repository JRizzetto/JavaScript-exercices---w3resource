/*
41. Return 30, 40, or 20 Based on Same Numbers

Write a JavaScript program to check a set of three numbers; 
if the three numbers are the same return 30; otherwise return 20; 
and if two numbers are the same return 40.
*/

// function samenumbers(first, second, third) {
//   if (first === second && second === third) {
//     return 30;
//   } else if (first === second || second === third || third === first) {
//     return 40;
//   } else {
//     return 20;
//   }
// }

// console.log(samenumbers(20, 30, 10));

function samenumbers(first, second, third, forth) {
  if (first === second && second === third) {
    return 30;
  } else if (first === second || second === third || third === first) {
    return 40;
  } else {
    return 20;
  }
}

console.log(samenumbers(20, 30, 10, 50));
