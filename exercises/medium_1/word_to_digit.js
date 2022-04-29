// Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — con



function wordToDigit(string) {
  let obj = {zero: 0, one: 1,two: 2,three: 3,four: 4,five: 5,six: 6,seven: 7,eight: 8,nine: 9}
  let arr = string.split(' ');
  
  let finalArr = arr.map(char => {
    if (char.endsWith('.')) {
      char = char.slice(0, -1)
      if (obj.hasOwnProperty(char)) {
        return `${obj[char]}.`;
      } else return `${char}.`
    }
    if (obj.hasOwnProperty(char)) {
      return obj[char];
    } else return char;
  }).join(' ');
  
  return finalArr;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

/*
input: string with some numbers written in letters
output: String with the numbers written in actual numbersd

- function takes one arg
- convert number words with their corresponding character

five = 5
three = 3

{
  zero: 0,
  one: 1,
  ...
}

- create object with number words as properties and number characters as values
- turn the given string into an array of words
- iterate over the array
- During each iteration, verify if word is a property of the object we created initially
  - if yes, change the word by it's value
- join the array
- return the result of the join
*/