/*
13. Create Variable with User-Defined Name

Write a JavaScript exercise to create a variable using a user-defined name. 
*/

function userDefined(name, age) {
  let obj = {};

  obj[name] = age;

  return obj;
}

console.log(userDefined("maria", 30));

let obj2 = {};
obj2.cachorro = "Thor";

console.log(obj2);
