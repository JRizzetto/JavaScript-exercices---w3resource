/*
7. Find Years When Jan 1 is Sunday (2014?2050)

Write a JavaScript program to find out if 1st January 
will be a Sunday between 2014 and 2050. 
*/

// function iterateDates(start, end) {
//   const current = new Date(start);
//   const last = new Date(end);

//   let dateList = [];

//   let weekDay = 0;
//   let month = 0;

//   while (current <= last) {
//     if (current.getMonth() === month && current.getDay() === weekDay) {
//       dateList.push(current);
//     }
//     current.setMonth(current.getMonth() + 1);
//   }

//   return dateList;
// }

// const result = iterateDates(new Date(2014, 0, 1), new Date(2050, 11, 31));

// console.log(result);

function iterateDates(startYear, endYear) {
  const years = [];

  for (let i = startYear; i <= endYear; i++) {
    const date = new Date(i, 0, 1);
    if (date.getDay() === 0) {
      years.push(`${i}-${date.getMonth() + 1}-${date.getDate()}`);
    }
  }

  return years;
}

console.log(iterateDates(2014, 2050));
