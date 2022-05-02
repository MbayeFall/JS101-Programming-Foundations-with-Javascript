// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

/*
input: a word (string)
output : string (middle character of the word)

- if the word length is odd return the middle char
- if the word length is even return the two middle char

testing -> odd ==> t
middle -> even ==> dd

- if the length of the string is odd
  - find the middle character
    - divide the length by 2
    - use the result of the division to extract the correct char
    - return it
- if the length is even 
  - find the starting middle characters
    - divide the length by 2
    - use the result to extract the character and the one after it
    - return both characters



*/

function getMiddle(s) {
  if (s.length % 2 === 1) {
    let middleCharIndex = Math.floor(s.length / 2);
    return s[middleCharIndex];
  } else {
    let startingMiddleChar = (s.length / 2) - 1;
    let middleChars = s[startingMiddleChar] + s[startingMiddleChar + 1];
    return middleChars;
  }
}

console.log(getMiddle("test")) // should return "es"
console.log(getMiddle("testing")) // should return "t"
console.log(getMiddle("middle")) // should return "dd"
console.log(getMiddle("A")) // should return "A"
