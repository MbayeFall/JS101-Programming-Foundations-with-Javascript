function century(year) {
  if (year < 101) {
    return '1st'
  } else {
    year = String(year).split('');

    let remainingNumbers = 0;
    remainingNumbers = year.splice(year.length - 2).join('');
    year = year.join('');
    if (Number(remainingNumbers) > 0) year = String(Number(year) + 1);

    if (year.endsWith('1')) {
      year += 'st';
    } else if (year.endsWith('2')) {
      year += 'nd';
    } else if (year.endsWith('3')) {
      year += 'rd';
    } else {
      year += 'th';
    }
    return year;
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
