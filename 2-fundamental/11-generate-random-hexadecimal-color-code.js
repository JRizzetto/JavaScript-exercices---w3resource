/*
11. Generate Random Hexadecimal Color Code

Write a JavaScript program to generate a random hexadecimal color code.

Use Math.random() to generate a random 24-bit (6 * 4bits) hexadecimal number.
Use bit shifting and then convert it to an hexadecimal string using Number.prototype.toString(16).
*/

const random_hex_color_code = () => {
  const randomNumber = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  return "#" + randomNumber;
};

console.log(random_hex_color_code());
console.log(random_hex_color_code());
console.log(random_hex_color_code());
console.log(random_hex_color_code());
console.log(random_hex_color_code());
