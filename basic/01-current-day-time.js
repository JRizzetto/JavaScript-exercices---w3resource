/*
1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

let date = new Date();

let day = date.getDay();

const weekDays = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekDay = weekDays[day];

let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let acronyms = hour >= 12 ? "PM" : "AM";
let hour12 = hour % 12 || 12;

console.log(`Today is : ${weekDay}.`);
console.log(
  `Current time is : ${hour12} ${acronyms} : ${minutes} : ${seconds}`,
);
