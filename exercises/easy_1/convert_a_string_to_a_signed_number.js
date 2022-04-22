const convertNumbers = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}

function stringToSignedInteger(string) {
  let strArr = string.split('');
  strArr.forEach(num => num = convertNumbers[num]);
  if (['-', '+'].includes(string[0])) strArr.shift();
  
  let multiplier = 10 ** (strArr.length - 1);
  
  let total = 0;
  for (let idx = 0; idx < strArr.length; idx++) {
    let currentNum = strArr[idx];
    total += currentNum * multiplier;
    multiplier /= 10;
  }
  if (string[0] === '-') return -total;
  return total;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true