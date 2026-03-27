/*
51. Transform Number to Hours and Minutes

Write a JavaScript application that transforms a provided numerical value into hours and minutes.
*/

function transfHoursMinutes(minutes) {
  if (!Number.isFinite(minutes) || minutes < 0) {
    return false;
  }

  let remainingMinutes = minutes % 60;
  let hours = minutes / 60;

  return `${Math.floor(hours).toString().padStart(2, "0")}:${remainingMinutes.toString().padStart(2, "0")}`;
}

// console.log(transfHoursMinutes(60));

function minutesInHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const RemainingMinutes = minutes % 60;

  return hours + ":" + RemainingMinutes.toString().padStart(2, "0");
}

console.log(minutesInHours(425));
