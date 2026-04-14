/*
13. String Length in Bytes

Write a JavaScript program to convert a given string's length to bytes.

Convert a given string to a Blob Object.
Use Blob.size to get the length of the string in bytes.
*/

const byte_Size = (str) => {
  return new Blob([str]).size;
};

console.log(byte_Size("123456"));
console.log(byte_Size("Hello World"));
console.log(byte_Size("Ã¢"));
