/*
120. Check if Point is Inside Circle

Write a JavaScript program to check if a point lies strictly inside the circle. 
Input:
Center of the circle (x, y)
Radius of circle: r
Point inside a circle (a, b)
*/

function pointInsideCircle(center, r, point) {
  let differenceX = center[0] ** 2 + point[0] ** 2;
  let differenceY = center[1] ** 2 + point[1] ** 2;
  let radius = r ** 2;

  let result = differenceX + differenceY < radius;

  return result;
}

console.log(pointInsideCircle([0, 0], 5, [2, 2]));
console.log(pointInsideCircle([0, 0], 5, [6, 0]));
console.log(pointInsideCircle([0, 0], 5, [5, 0]));
