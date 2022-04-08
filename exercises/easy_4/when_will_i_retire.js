const readline = require('readline-sync');

let currentAge = readline.question('What is your age? ');
let retiringAge = readline.question('At what age would you like to retire? ')

let today = new Date();

let currentYear = today.getFullYear();

let remainingYears = retiringAge - currentAge;
let retiringYear = remainingYears + currentYear;

console.log(`It's ${currentYear}. You will retire in ${retiringYear}`);
console.log(`You have only ${remainingYears} years of work to go!`);