const readline = require('readline-sync');

console.log('What is the bill?');
let bill = parseInt(readline.question());

console.log('What is the tip percentage');
let percentage = parseInt(readline.question());

let tip = bill * (percentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);