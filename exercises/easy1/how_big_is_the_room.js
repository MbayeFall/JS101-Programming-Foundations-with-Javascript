const readline = require('readline-sync');

function prompt(string) {
  console.log(`=> ${string}`);
}

prompt('Welcome to How Big Is The Room\n');

prompt('Enter the length of the room in meters');
let length = readline.prompt();

prompt('Enter the width of the room in meters');
let width = readline.prompt();

let areaInMeters = length * width;
let areaInFeet = areaInMeters * 10.7639;

console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);