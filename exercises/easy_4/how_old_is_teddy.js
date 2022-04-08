function randomBetween(min, max) {

  let age = Math.floor(Math.random() * (max - min)) + (min + 1);

console.log(`Teddy is ${age} years old!`);

}

randomBetween(20, 120);