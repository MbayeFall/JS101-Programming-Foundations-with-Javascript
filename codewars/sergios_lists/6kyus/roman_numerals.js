// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

/*
input: String(roman numerals)
output: number;

- convert the string into a number
- conversion is done from left to right

[M, C, M, X, C]
[1000, -100, 1000, -10, 100]
- create an obj containing the key value pairs of the symbols and the values
- convert the input into an array of characters
- convert each element into its corresponding number
- iterate over the array of numbers
- duirn each iteration:
  - check if current number is lower than number on next index
  - if it is change the value of current number to - number
- calculate the sum of the array 
- return the sum 
*/

function doTest(romanNums) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  } 
  romanNums = romanNums.split('')
  let numbers = romanNums.map(num => obj[num]);
  numbers = numbers.map((num, idx) => {
    if (num < numbers[idx + 1]) return -num;
    return num;
  })
  let result = numbers.reduce((acc, cur) => acc + cur, 0);
  return result;
}

console.log(doTest('MCMXC') === 1990);
console.log(doTest('XXI') === 21);
console.log(doTest('I') === 1);
console.log(doTest('IV') === 4);
console.log(doTest('MMVIII') === 2008);
console.log(doTest('MDCLXVI') === 1666);
