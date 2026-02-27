/*
8. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer 
between 1 and 10, and the user is then prompted to input a guess 
number. The program displays a message "Good Work" if the input 
matches the guess number otherwise "Not matched". 
*/

// function randomGame(number) {
//   let inputNumber = number;

//   if (inputNumber > 10) inputNumber = 10;
//   if (inputNumber < 1) inputNumber = 1;

//   let randomNumber = Math.ceil(Math.random() * 10);

//   return randomNumber === inputNumber ? `Good Work` : `Not matched`;
// }

// console.log(randomGame(5));

function randomGame() {
  let inputNumber = Number(prompt("Typing a number between 1 to 10"));

  if (inputNumber < 1 || inputNumber > 10) {
    console.log("Enter a valid number!");
  }

  let randomNumber = Math.ceil(Math.random() * 10);

  if (randomNumber === inputNumber) {
    console.log(`Good Work`);
  } else {
    console.log(`Not matched`);
  }

  console.log("Random number was:", randomNumber);
}

randomGame();
