const readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let integer = readline.question();

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let operation = readline.question();

let sum = 0;
let product = 1;
if (operation === 's') {
  for (let num = 1; num <= integer; num += 1) {
    sum += num;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (operation === 'p') {
  for (let num = 1; num <= integer; num += 1) {
    product *= num;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${product}.`);
}