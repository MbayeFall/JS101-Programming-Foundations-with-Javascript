function sum(number) {
  number = String(number);
  number = number.split('');
  number = number.reduce((a, b) => Number(a) + Number(b));
  console.log(number)
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45