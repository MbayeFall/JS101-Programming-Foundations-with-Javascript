/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  
  let numOfValidSmileys = 0;
  
  arr.forEach(smiley => {
    if (isValidSmileyFace(smiley)) numOfValidSmileys += 1;
  })
  
  return numOfValidSmileys;
}

function isValidSmileyFace(chars) {
  let validFirstChars = [':', ';'];
  let validOptionalChars = ['-', '~'];
  let validLastChars = [')', 'D'];
  
  if (chars.length === 2) {
    if (!validFirstChars.includes(chars[0]) || !validLastChars.includes(chars[1])) return false;
  } else {
    if (!validFirstChars.includes(chars[0]) || !validOptionalChars.includes(chars[1]) 
        || !validLastChars.includes(chars[2])) return false;
  }
  return true;
}

/*
input: array of smiley faces
output: number 

Problem: return the number of smiley faces based on a given string

- first character : or ;
- second optional character is - or ~
- last character is ) or D
- if the string is empty return 0

2 chars :D   3 chars :~)

- create all variables for the valid chars
- create a counter variable to count the number of valid smiley faces
- iterate over the given array, during each iteration:
  - check whether the smiley is valid
    - when we have 2 chars, check if all chars are valid
    - when we have 3 chars, check if all chars are valid
  - if true add counter 
- return counter
*/
