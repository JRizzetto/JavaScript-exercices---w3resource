/*
142. Simplify Unix-Style Absolute File Path

Write a JavaScript program to simplify a given absolute path for a file in Unix-style.
*/

function absoluteFilePath(str) {
  let parts = str.split("/");
  let stack = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] !== "" && parts[i] !== ".." && parts[i] !== ".") {
      stack.push(parts[i]);
    }

    if (parts[i] === ".." && stack.length > 0) {
      stack.pop();
    }
  }

  return "/" + stack.join("/");
}

console.log(absoluteFilePath("/home/"));
console.log(absoluteFilePath("/home/./joao/"));
console.log(absoluteFilePath("/home/joao/../documentos"));
console.log(absoluteFilePath("/home/joao/projetos/../../docs"));
console.log(absoluteFilePath("/a/./b/../../c/"));
console.log(absoluteFilePath("/"));
