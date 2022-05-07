/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

*/

function findMissingLetter(array) {
  let string = array.join('');
  for (let idx = 0; idx < string.length; idx++) {
    let currentCharCode = string.charCodeAt(idx)
    if (currentCharCode + 1 !== string.charCodeAt(idx + 1)) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return ' ';
}

/*
input: an array of letters
output: a letter (upperCase or lowerCase)

- the array will always be valid
- always exactly one letter missing
- all uppercase or all lowercase;


- convert the array into a string of characters
- create an iteration over the length of the string
- during each iteration, check if the character code of the next index is equal to the one on current index + 1
  - if false, return the charCode of index + 1

*/
