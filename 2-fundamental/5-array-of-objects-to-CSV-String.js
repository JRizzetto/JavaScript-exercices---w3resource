/*
Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.

Use Array.prototype.join(delimiter) to combine all the names in columns to create the first row.
Use Array.prototype.map() and Array.prototype.reduce() to create a row for each object, substituting non-existent values with empty strings and only mapping values in columns.
Use Array.prototype.join('\n') to combine all rows into a string.
Omit the third argument, delimiter, to use a default delimiter of,.
*/

const JSON_to_CSV = (data, delimeter = ",") => {
  const strList = data.join(delimeter);

  console.log(strList);
};

console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"],
  ),
);

/*
x,y
"100","200"
"300","400"
"6",""
"","7"
*/
