const readline = require('readline-sync');

let integer = Number(readline.question('Please enter an integer greater than 0: '));

let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ')

let total;
switch (operation) {
  case 's':
    total = 0;
    for (let num = 1; num <= integer; num++) total += num
    console.log(`The sum of the integers between 1 and ${integer} is ${total}.`)
    break;
  case 'p':
    total = 1;
    for (let num = 1; num <= integer; num++) total *= num
    console.log(`The product of the integers between 1 and ${integer} is ${total}.`)
}