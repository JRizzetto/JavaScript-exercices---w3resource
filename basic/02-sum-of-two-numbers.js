/*
2. Print Current Window Contents

Write a JavaScript program to print the current window contents.
*/

// const btnClick = document.getElementById("btn");

// btnClick.addEventListener("click", () => {
//   print_current_page();
// });

// function print_current_page() {
//   window.print();
// }

document.addEventListener("DOMContentLoaded", () => {
  const btnClick = document.getElementById("btn");
  btnClick.addEventListener("click", () => {
    window.print();
  });
});
