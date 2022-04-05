function convertGradeToLetter(grade) {
  if (grade <= 100 && grade >= 90) {
    return 'A';
  } else if (grade < 90 && grade >= 80) {
    return 'B';
  } else if (grade < 80 && grade >= 70) {
    return 'C';
  } else if (grade < 70 && grade >= 60) {
    return 'D';
  } else if (grade < 60 && grade >= 0) {
    return 'F';
  }
}
function getGrade(grade1, grade2, grade3) {
  let finalGrade = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
  return convertGradeToLetter(finalGrade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"