/*
1. Compare Objects for Equivalent Properties

Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
- Use Object.keys() to get all the keys of the second object.
- Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine if all keys exist in the first object and have the same values.
*/

function objectsEquivalent1() {
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { a: 1, b: 2 };

  let values = Object.keys(obj2);
  let result = values.every(
    (key) => obj1.hasOwnProperty(key) && obj2[key] === obj1[key],
  );

  return result;
}

// console.log(objectsEquivalent());

const objectsEquivalent = (obj1, obj2) => {
  let values = Object.keys(obj2);
  let result = values.every(
    (key) => obj1.hasOwnProperty(key) && obj2[key] === obj1[key],
  );

  return result;
};

console.log(objectsEquivalent({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }));
