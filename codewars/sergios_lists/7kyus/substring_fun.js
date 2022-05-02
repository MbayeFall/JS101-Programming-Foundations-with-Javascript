// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

function nthChar(words) {
  let finalStr = "";
  words.forEach((word, idx) => {
    let currentChar = word[idx];
    finalStr += currentChar;
  })
  return finalStr;
}

nthChar(["yoda", "best", "has"])
// example:

// ["yoda", "best", "has"]  -->  "yes"
//   ^        ^        ^
//   n=0     n=1     n=2
// Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

/*
input: array of words
output: concatenation of different letters of words into a string

- all words will have enough letters
iterator1

 ["yoda", "best", "has"]

- creating a variable that represents our final string
- iterate over the array one by one 
- during each iteration select the word
  - select the character of the word that matches the current index
  - concatenate the char to the finalstr
- return the final string
*/