/*
66. Return City Name if Starts with 'Los' or 'New'

Write a JavaScript program to display the city name if 
the string begins with "Los" or "New" otherwise return blank. 
*/

function cityStartName(str) {
  if (str.slice(0, 3) === "Los" || str.slice(0, 3) === "New") {
    return true;
  }

  return str;
}

console.log(cityStartName("New York"));
console.log(cityStartName("Los Angeles"));
console.log(cityStartName("London"));
