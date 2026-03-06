/*
56. Divide Numbers and Format with Commas

Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
*/

function formatNumber(number, divisor) {
  // divide two positive numbers and return the result as string
  let divisionNumbers = String(number / divisor);

  // formatted commas

  return divisionNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log(formatNumber(10000000, 2));
