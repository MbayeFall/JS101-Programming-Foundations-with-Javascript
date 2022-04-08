const readline = require('readline-sync');

let num1 = readline.question('Enter the 1st number: ');
let num2 = readline.question('Enter the 2nd number: ');
let num3 = readline.question('Enter the 3rd number: ');
let num4 = readline.question('Enter the 4th number: ');
let num5 = readline.question('Enter the 5th number: ');
let lastNum = readline.question('Enter the last number: ');

let arr = [num1, num2, num3, num4, num5];
if (arr.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${num1},${num2},${num3},${num4},${num5}.`)
} else {
  console.log(`The number ${lastNum} does not appear in ${num1},${num2},${num3},${num4},${num5}.`)
}

