// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

/*
input: string of words
output: array of words

Problem: based on a given string, return the most commonly used words in a descending order of number of usage

 - valid words only contain letters and apostrophes
 - case insensitive
 - ties broken arbitrarily
 - if less than three unique words return top 2 or top 1

 "  //wont won't won't "
 "  wont won't won't"

{
  wont: 1,
  won't: 2,
}
[[wont:1], [won't, 2]]
[won't, 2], [wont:1]
[won't, wont]

 - convert str to lowerCase
 - convert the string into an array of characters
 - remove all the characters that are not letters, spaces or apostrophes
 - join the word back into a string
 - convert it back into an array of words using the spaces as separators 
 - create an empty obj
 - add all the words and their occurences inside the obj
 - collect the entries of teh object in an array
 - sort them in a descending order based on their second idx
 - create a new Arr
 - iterate over the first three indices of the array, during each iteration:
  - add the first index to the new Arr
- return newArr

*/

function top_3_words(text) {
  if (!containsLetter(text)) return [];

  text = text.toLowerCase();
  text = text.split('').filter(char => {
    return (char >= 'a' && char <= 'z') || char === ' ' || char === "'";
  }).join('').trim().split(' ').filter(char => char !== '');

  let occurrences = {};
  text.forEach(word => {
    if (occurrences.hasOwnProperty(word)) {
      occurrences[word] += 1;
    } else occurrences[word] = 1;
  })
  
  let entries = Object.entries(occurrences);
  entries.sort((a, b) => b[1] - a[1]);
  
  let top3 = [];
  
  for (let idx = 0; idx < entries.length; idx++) {
    top3.push(entries[idx]);
    if (idx === 2) break;
  }
  
  let finalArr = top3.map(subArr => {
    return subArr[0];
  })
  console.log(finalArr)
  return finalArr;
}


function containsLetter(str) {
  return str.split('').some(char => {
    return char >= 'a' && char <= 'z';
  })
}

console.log(top_3_words("a a a  b  c c  d d d d  e e e e e") == ["e", "d", "a"])
console.log(top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "aa"])
console.log(top_3_words("  //wont won't won't ") == ["won't", "wont"])
console.log(top_3_words("  , e   .. ") == ["e"])
console.log(top_3_words("  ...  ") == [])
console.log(top_3_words("  '  ") == [])
console.log(top_3_words("  '''  ") == [])
console.log(top_3_words("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.") == ["a", "of", "on"])
