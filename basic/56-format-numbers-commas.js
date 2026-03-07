/*
56. Divide Numbers and Format with Commas

Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.
*/

// function formatNumber(number, divisor) {
//   // divide two positive numbers and return the result as string
//   let divisionNumbers = String(number / divisor);

//   // formatted commas

//   return divisionNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// console.log(formatNumber(10000000, 2));

function formatNumbers(first, second) {
  if (second === 0) {
    return `Can't divide by zero`;
  }

  let result = first / second;

  let formattedResult = result.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });

  return formattedResult;
}

const dividend = 1000000;
const divisor = 107;
let result = formatNumbers(dividend, divisor);
console.log(result);
