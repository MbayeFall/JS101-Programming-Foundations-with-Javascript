// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.


// The tests above should each log "true".

/*
input: A string
output: letter (string) return the character that appears the least

- if multiple characters appear the same amount of times return the first one that appears
- case insensitive
- spaces count as characters

Hello World
obj {
  h: 1,
  e: 1,
  l: 3,

}

- to turn the string into lowercase
- create an empty object
- iterate over the string one by one
- select the character and check if it exists inside the obj
  - if no, add it as a property of obj with value of 1
  - if yes, increment by 1;
- compare the values of the objects
- get the lowest value
- iterate through the object
- find the property of the object that contains the lowest value 
- return the property
*/

function leastCommonChar(str) {
  str = str.toLowerCase();
  let obj = {};
  str.split('').forEach(char => {
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else obj[char] = 1;
  })
  let sortedValues = Object.values(obj).sort((a, b) => a - b);
  let lowestValue = sortedValues[0];

  for (let char in obj) {
    if (obj[char] === lowestValue) return char;
  }
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
