/*
38. Evaluate Grades Based on Total Marks and Final Exam

Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. 
The grading criteria are as follows:

If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their 
total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.

If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
*/

function evaluateGrades(marks, valid) {
  if (valid) {
    return marks >= 90 && marks <= 100;
  } else {
    return marks >= 89 && marks <= 100;
  }
}

console.log(evaluateGrades(89, false));
