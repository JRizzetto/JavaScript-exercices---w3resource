/*
10. Multiplication and Division (User Input)
Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
*/

function multiplyBy() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;

  const result = (document.getElementById("result").textContent =
    firstNumber * secondNumber);
}

function divideBy() {
  const firstNumber = document.getElementById("firstNumber").value;
  const secondNumber = document.getElementById("secondNumber").value;

  const result = (document.getElementById("result").textContent =
    firstNumber / secondNumber);
}
