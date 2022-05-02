// In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, because there are no words that begin with ん　in the Japanese language.

// English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

// For example: apple -> eggs -> salmon -> nut -> turkey ...

// Your Task:
// You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

// Examples:
// All elements valid:
// The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

// should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

// An invalid element at index 2:
// The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

// should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

// An invalid empty string at index 2:
// The array {"ab","bc","","cd"}

// should return ("ab","bc")

// All invalid empty string at index 0:
// The array {"","bc","","cd"}

// should return An Empty List

/*
input: an array of words
output: array of words that contain every valid word until mistake

- if array empty return empty array
- empty string is considered as invalid word

[]
["dog","goose","tiger","cat", "elephant","rhino","orc"]

- if input array is empty return empty array
- create an empty array 
- iterate over the input array one by one 
- during each iteration, select the currentWord
  - push the current word to empty array created initially
  - if nextWord does not start with our currentWord's last character then break the loop
- return the array
*/

function shiritori(words) {
  if (words.length === 0) return [];
  let finalArr = [];
  for (let idx = 0; idx < words.length; idx++) {
    let word = words[idx];
    if (word === "") return [];
    finalArr.push(word);
    let nextWord = words[idx + 1];
    console.log(nextWord)
    if (nextWord === undefined || !nextWord.startsWith(word[word.length - 1])) break;
  }
  return finalArr;
}

console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]));

// should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]));

// should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

// An invalid empty string at index 2:
console.log(shiritori(["ab","bc","","cd"]));

// should return ("ab","bc")

// All invalid empty string at index 0:
console.log(shiritori(["","bc","","cd"]))

// should return An Empty List