// Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

// For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

// Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

/*
input: string
output: string

Problem: based on a given string, if there are duplicates of consecutive characters of more than 2, put all the ones after the second one between brackets

- if input is not a string return "Please enter a valid string"
- all inputs are lowerCase();

count = 0
newStr = ""
subs = ""

- if input is not a string retun please enter...
- create a count variable initialized to 0
- create a newStr variable set to empty string
- create a subs variable set to empty string
- iterate over the string one by one, during each iteration:
  - if current char is equal to next char
    - if true, 
      - increment count by 1
      - if count is superior or equal to 2,
        - if true, 
        - add char to subs;
        - else add char to newStr
    - if false,
      - if count is superior or equal to 2,
        - if true,
        -  add [subs]
        - reset subs;
        if false, add char to newStr 
      - reset count to 0
*/

function stringParse(str) {
  if (typeof str !== 'string') return 'Please enter a valid string';

  let count = 0;
  let newStr = "";
  let subs = "";

  for (let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    let nextChar = str[idx + 1];

    if (char === nextChar) {
      count++;
      if (count > 2) {
        subs += char;
      } else newStr += char;
    } else {
      count++;
      if (count > 2) {
        subs += char;
        newStr += `[${subs}]`;
        subs = "";
      } else newStr += char;
      count = 0;
    }
  }
  return newStr;
 }

console.log(stringParse("aaaabbcdefffffffg") === "aa[aa]bbcdeff[fffff]g")
console.log(stringParse("boopdedoop") === "boopdedoop")
console.log(stringParse("helloookat") === "helloo[o]kat")
