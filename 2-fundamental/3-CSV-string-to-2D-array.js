/*
3. CSV String to 2D Array

Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.

Note: Use String.split('\n') to create a string for each row, then String.split(delimiter) to separate the values in each row. 
Omit the second argument, delimiter, to use a default delimiter of ,. Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

Use Array.prototype.slice() and Array.prototype.indexOf('\n') to remove the first row (title row) if omitFirstRow is true.
Use String.prototype.split('\n') to create a string for each row, then String.prototype.split(delimiter) to separate the values in each row.
Omit the second argument, delimiter, to use a default delimiter of ,.
Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.
*/

const csvToArray = (data, delimiter = ",", omitFirstRow = false) => {
  let result = data.split("\n");

  if (omitFirstRow) {
    result = result.slice(1);
  }

  const final = result.map((v) => v.split(delimiter));

  return final;
};

// console.log(csvToArray("a,b\nc,d")); // [['a', 'b'], ['c', 'd']]
// console.log(csvToArray("a;b\nc;d", ";")); // [['a', 'b'], ['c', 'd']]
// console.log(csvToArray("head1,head2\na,b\nc,d", ",", true)); // [['a', 'b'], ['c', 'd']]

const csvToArray1 = (data, delimiter = ",", omitFirstRow = false) => {
  let result = data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

  return result;
};

console.log(csvToArray1("a,b\nc,d")); // [['a', 'b'], ['c', 'd']]
console.log(csvToArray1("a;b\nc;d", ";")); // [['a', 'b'], ['c', 'd']]
console.log(csvToArray1("head1,head2\na,b\nc,d", ",", true)); // [['a', 'b'], ['c', 'd']]
