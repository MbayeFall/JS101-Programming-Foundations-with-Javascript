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

function stringToInteger(string) {
  let strArr = string.split('');
  strArr.forEach(num => num = convertNumbers[num]);
  
  let multiplier = 10 ** (strArr.length - 1);
  
  let total = 0;
  for (let idx = 0; idx < strArr.length; idx++) {
    let currentNum = strArr[idx];
    total += currentNum * multiplier;
    multiplier /= 10;
  }
  return total;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true