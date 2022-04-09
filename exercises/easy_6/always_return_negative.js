function negative(number) {
  number = String(number); 
  if (!number.includes('-')) {
    number = '-' + number;
  }
  return Number(number);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0