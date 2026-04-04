/*
4. CSV to 2D Array of Objects

Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.

- Use Array.prototype.slice() and Array.prototype.indexOf('\n') and String.prototype.split(delimiter) to separate the first row (title row) into values.
- Use String.prototype.split('\n') to create a string for each row, then Array.prototype.map() and String.prototype.split(delimiter) to separate the values in each row.
- Use Array.prototype.reduce() to create an object for each row's values, with the keys parsed from the title row.
- Omit the second argument, delimiter, to use a default delimiter of ,.
*/

const CSV_to_JSON = (data, delimeter = ",") => {
  let titles = data.slice(0, data.indexOf("\n")).split(delimeter);
  let lines = data.slice(data.indexOf("\n") + 1).split("\n");

  let result = lines.map((line) => {
    let listLine = line.split(delimeter);

    let listTitle = titles.reduce((acc, title, index) => {
      acc[title] = listLine[index];

      return acc;
    }, {});

    return listTitle;
  });

  return result;
};

console.log(CSV_to_JSON("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON("col1;col2\na;b\nc;d", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
