// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

/*
input: two strings
output: boolean (true or false);

- anagrams are case Sensitive f !== F



- if the 2 given strings length are different return false
- turn the 2 strings into arrays  
- iterate over the first string 
- During each iteration select the character and check if it is included in the second strings
  - if yes, remove from the char from the second strings
  - if no, return false
- return false
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  str2 = str2.toLowerCase().split('');
  str1 = str1.toLowerCase().split('');
  let isAnagram = str1.every(char => {
    if (str2.includes(char)) {
      str2.splice(str2.indexOf(char), 1);
      return true;
    }
    return false;
  })
  console.log(isAnagram)
}

console.log(isAnagram("foefet", "toffee")) // true
console.log(isAnagram("Buckethead", "DeathCubeK")) // true
console.log(isAnagram("Twoo", "WooT")) // true

console.log(isAnagram("dumble", "bumble")) // false
console.log(isAnagram("ound", "round")) // false
console.log(isAnagram("apple", "pale")) // false
