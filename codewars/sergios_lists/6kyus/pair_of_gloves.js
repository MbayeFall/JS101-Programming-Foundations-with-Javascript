// ------------------------------------------------------------------------------


// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

/*
input: array of gloves
output: number (number of pairs of the same color)

{
  gray: 2
  black: 2
  purple: 2
}
- ['gray','black','purple','purple','gray','black']

- create an empty object
- iterate over the array one by one 
  - during each iteration, check if the current element is a property of the object
  - if true, increment its value by 1
  - if not, create the property and initialize its value to 1
- collect the values of the object
- remove all values that are less than 2
- divide all values by 2 and floor all values
- calculate sum
- return the sum of the array
*/

function numberOfPairs(gloves) {
  let obj = {};
  gloves.forEach(glove => {
    if (obj.hasOwnProperty(glove)) {
      obj[glove] += 1;
    } else obj[glove] = 1;
  })
  let pairsOfGloves = Object.values(obj).filter(value => value >= 2);
  pairsOfGloves = pairsOfGloves.map(num => Math.floor(num / 2));
  let sumOfPairs = pairsOfGloves.reduce((acc, cur) => acc + cur, 0);
  return sumOfPairs;
}

console.log(numberOfPairs(['red','red']) === 1);
console.log(numberOfPairs(['red','green','blue']) === 0);
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']) === 3);
