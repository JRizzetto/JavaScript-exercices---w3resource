/*
3. Get Current Date in Various Formats

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const date = new Date();

let day = String(date.getDate()).padStart(2, "0");
let month = String(date.getMonth() + 1).padStart(2, "0");
let year = date.getFullYear();

console.log(`${month}-${day}-${year}`);
console.log(`${day}-${month}-${year}`);
