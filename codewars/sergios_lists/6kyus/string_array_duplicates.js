/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

*/

function dup(s) {
  let finalArr = s.map(word => {
    return removeDuplicates(word)
  })
  return finalArr;
};


function removeDuplicates(word) {
  let noDuplicateArr = word.split('').map((char, idx, arr) => {
    if (char !== arr[idx - 1]) return char;
  }).filter(char => char !== undefined);
  return noDuplicateArr.join('');
}

/*
input: array of words
output: array of words where certain characters removed from words

- strings will be lowercase
- no spaces between characters

remove consecutive duplicate letters 
piccaninny
assessee
[]

- create an empty array
- iterate over the current array,
  - during each iteration, remove the duplicate characters on the word
    - create an empty array
    - iterate over each character of the word
      - during each iteration, check if current character is different from last character
      - if true add to the empty array
  - add the result word on the empty array
- return the array


*/
