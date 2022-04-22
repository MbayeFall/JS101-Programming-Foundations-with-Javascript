function signedIntegerToString(number) {
  let array = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = '';
  let negative = Math.sign(number) === -1;
  let nullNum = Math.sign(number) === 0;
  number = Math.abs(number);
   do {
    let newNumber = number % 10;
    result = array[newNumber] + result;
    number = Math.floor(number / 10);
  } while (number > 0) 
  if (negative) return '-' + result;
  if (nullNum) return '0';
  return '+' + result;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");