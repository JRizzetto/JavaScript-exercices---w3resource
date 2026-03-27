/*
14. Get File Extension of Filename

Write a JavaScript exercise to get the filename extension.  
*/

function getExtension(name) {
  const index = name.lastIndexOf(".");
  const length = name.length;

  let nameExtension = name.slice(index + 1, length);

  if (!nameExtension || index <= 0) {
    return `Extension unkown`;
  }

  return nameExtension;
}
console.log(getExtension("jefferson"));
