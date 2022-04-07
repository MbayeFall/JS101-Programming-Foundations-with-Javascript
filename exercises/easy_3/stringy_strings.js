function stringy(number) {
  let fullNum = '10';
  fullNum = fullNum.repeat(number);
  return fullNum.slice(0, number);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"