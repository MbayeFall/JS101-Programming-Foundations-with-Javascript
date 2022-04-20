const readline = require('readline-sync');
const  SQUARE_METER_TO_FEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = Number(readline.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(readline.prompt());

let area = length * width;
let areaInSquareFeet = area * SQUARE_METER_TO_FEET;

console.log(`The area of the room is ${area} square meters (${areaInSquareFeet.toFixed(2)} square feet).`);