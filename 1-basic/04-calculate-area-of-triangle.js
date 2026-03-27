/*
4. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function trianguleArea(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}

const area = trianguleArea(5, 6, 7);
console.log(`the traangle area is ${area.toFixed(2)}`);
