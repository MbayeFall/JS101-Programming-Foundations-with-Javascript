/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
*/

function anagramDifference(w1,w2){
  let commonChars = [];
  w2 = w2.slice(0).split('');
  for (let idx = 0; idx < w1.length; idx++) {
    let currentChar = w1[idx];
    if (w2.includes(currentChar)) {
      commonChars.push(currentChar);
      w2.splice(w2.indexOf(currentChar), 1);
    }
  }
  w1 = w1.split('');
  commonChars.forEach(char => {
    if (w1.includes(char)) w1.splice(w1.indexOf(char), 1);
  })
  return w1.length + w2.length;
}

/*
input: two words (strings)
output: number (words that have to be removed for the two words to become anagrams)

- all inputs will be lowerCase
- remove all the letters except the ones they have in common

codewars  ==> cear    odws
hackerrank ==> cear   hkrnk

- create a variable named commonChars []
- create a copy of the w2 which is an array
- iterate over word1
- during each iteration check if the current character is included in copy w2
  - if yes, add char to commonchars, remove it from copy of w2
- convert w1 into array
- convert w2 into an array
- iterate over the commonChars 
- during each iteration select the char and remove that same character from w1 and w2
- sum length of w1 and length of w2 and return it
*/ 

