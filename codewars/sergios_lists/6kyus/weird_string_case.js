/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string){
  string = string.split(' ');
  let finalArr = string.map(word => upperCaseWord(word));
  return finalArr.join(' ');
}

function upperCaseWord(str) {
  str = str.toLowerCase();
  str = str.split('');
  str.forEach((char, idx) => {
    if (idx % 2 === 0) str[idx] = str[idx].toUpperCase();
  })
  return str.join('');
}
/*
input: string
output string (characters uppercased)

- turn the string into an array of words
- iterate over each word
- capitalize the word
- turn the array back into a string of words
- return it
*/
