// ------------------------------------------------------------------------------



// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

/*
input: String
output: string with some characters modified

- the first letter  to its ASCII code
- switch the second letter to its last letter

Piotr
80 iotr = roti

- create a new array to hold a new version of the given array (finalStr)
- iterate over the string, during each iteration:
-----------------------------------------------
  -  select the word,
  - create a string (empty)
  - change the first character to its asciiCode and add it to the String
  - create a slice of the remaining word
  - invert first and last chars 
  - add that to the string
--------------------------------
join the array separated by spaces
return string

*/

function encryptThis(str) {
  let finalStr = str.split(' ').map(word => {
    return convertWord(word)
  });
  return finalStr.join(' ');
}

function convertWord(word) {
  let finalStr = "";
  finalStr += word.charCodeAt(0)
  let remainingWord = word.slice(1).split('');
  
  let firstW = remainingWord[0];
  let lastW = remainingWord[remainingWord.length - 1];
  remainingWord[0] = lastW;
  remainingWord[remainingWord.length - 1] = firstW;
  remainingWord = remainingWord.join('');
  
  finalStr += remainingWord;
  
  return finalStr;
}

console.log(encryptThis("A") === "65");
console.log(encryptThis("A wise old owl lived in an oak") === "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(encryptThis("The more he saw the less he spoke") === "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp");
console.log(encryptThis("The less he spoke the more he heard") === "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
console.log(encryptThis("Why can we not all be like that wise old bird") === "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
console.log(encryptThis("Thank you Piotr for all your help") === "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");    



// ------------------------------------------------------------------------------



