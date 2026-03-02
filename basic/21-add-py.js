/*
21. Add 'Py' to Start of String if Not Present

Write a JavaScript program to create another string by adding "Py" in front 
of a given string. If the given string begins with "Py" return the original string.
*/

function stringPy(string) {
  let beggining = string.slice(0, 2);

  if (string.startsWith("Py")) {
    return string;
  }

  return "Py" + string;
}

console.log(stringPy("Pedro"));
