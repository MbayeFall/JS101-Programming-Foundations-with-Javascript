function swapCase(string) {
  string = string.split('');

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (char.toLowerCase() === char) {
      string[index] = char.toUpperCase();
    } else {
      string[index] = char.toLowerCase();
    }
  }
  string = string.join('');
  console.log(string);
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"