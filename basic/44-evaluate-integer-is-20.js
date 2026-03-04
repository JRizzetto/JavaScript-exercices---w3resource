/*
44. Evaluate if Integer is =20 and Less Than Another

Write a JavaScript program that evaluates three given integers to determine 
if any one of them is greater than or equal to 20 and less than at least one 
of the other two. 
*/

function evaluateInteger(first, second, third) {
  let firstEvaluate = first >= 20 && (first < second || first < third);
  let secondEvaluate = second >= 20 && (second < first || second < third);
  let thirdEvaluate = third >= 20 && (third < second || third < first);

  return firstEvaluate || secondEvaluate || thirdEvaluate;
}

console.log(evaluateInteger(10, 10, 20));
