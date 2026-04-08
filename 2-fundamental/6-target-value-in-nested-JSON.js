/*
Target Value in Nested JSON

Write a JavaScript program to target a given value in a nested JSON object based on the given key.

Use the in operator to check if target exists in obj.
If found, return the value of obj[target].
Otherwise use Object.values(obj) and Array.prototype.reduce() to recursively call dig on each nested object until the first matching key/value pair is found.
*/

const targetDig = (obj, target) => {
  for (let keys in obj) {
    if (keys === target) {
      return obj[keys];
    }

    if (typeof obj[keys] === "object" && obj[keys] !== null) {
      const result = targetDig(obj[keys], target);

      if (result !== undefined) return result;
    }
  }
};

//Output
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};

// console.log(targetDig(data, "level3")); // Output: 'some data'
// console.log(targetDig(data, "level4")); // Output: undefined
// console.log(targetDig(dog, "message")); // Output: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg'

const exemplo = {
  nome: "João",
  idade: 25,
  ativo: true,
  endereco: {
    rua: "A",
  },
};

const findValue = (values, target) => {
  for (let value in values) {
    if (value === target) {
      return values[value];
    }

    if (typeof values[value] === "object" && values[value] !== null) {
      const result = findValue(values[value], target);

      if (result !== undefined) return result;
    }
  }
};

console.log(findValue(exemplo, "rua"));
