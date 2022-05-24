// There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

// Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

// In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

// Requirement
// return a string where:

// 1) the first and last characters remain in original place for each word
// 2) characters between the first and last characters must be sorted alphabetically
// 3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

// Assumptions

// 1) words are seperated by single spaces
// 2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
// 3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
// 4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
// 5) ignore capitalisation

// for reference: http://en.wikipedia.org/wiki/Typoglycemia

/*
input: string
output: string

Problem: return a word based on a given word but the structure of some letters are changed in a certain way

- first and last chars of each word don't change
- all chars in between must be sorted a-z
- all inputs are lowercase
- only spaces separate words
- 4 possible punctuations
- empty string returns empty string

['-', "'", ',', '.']

you'll
earth.

- convert the given string into an array of words
- iterate over the given array, during each iteration:
  - change the word at the current index to the right format (helper function)
    - create an array of all the punctuations
    - create punctuation variable as empty string
    - create index of punctuation variable
    - convert the word into an array of characters
    - find the index of the punctuation 
    - remove the punctuation
    - sort all characters into alphabetical order except first and last
    - reinsert the punctuation at the right index
- join the result array 
- return the result array

*/

function scramble_words(str) {
  let words = str.split(' ');
  let finalWords = words.map(word => format(word));
  return finalWords.join(' ');
}


function format(word) {
  let punctuations = ['-', "'", ',', '.'];
  word = word.split('');

  if (word.length <= 1) return word;

  if (!isPunctuated(word)) {
    let firstChar = word.shift();
    let lastChar = word.pop();
    word.sort();
    return firstChar + word.join('') + lastChar;
  } else {
    let punctuation = [];
    let punctuationIdx = [];
    word.forEach((char, idx) => {
      if (punctuations.includes(char)) {
        punctuation.push(char);
        punctuationIdx.push(idx);
      }
    })
    word = word.filter(char => !punctuations.includes(char))
    let firstChar = word.shift();
    let lastChar = word.pop();
    word.sort();
    word.unshift(firstChar);
    word.push(lastChar);
    punctuation.forEach((char, idx) => {
      word.splice(punctuationIdx[idx], 0, punctuation[idx]);
    })
    return word.join('');
  }

}

function isPunctuated(word) {
  return word.includes('-') || word.includes("'") || word.includes(',') || word.includes('.')
}

console.log(scramble_words('professionals') == 'paefilnoorsss')
console.log(scramble_words('i') == 'i')
console.log(scramble_words('') == '')
console.log(scramble_words('me') == 'me')
console.log(scramble_words('you') == 'you')
console.log(scramble_words('card-carrying') == 'caac-dinrrryg')
console.log(scramble_words("shan't") == "sahn't")
console.log(scramble_words('-dcba') == '-dbca')
console.log(scramble_words('dcba.') == 'dbca.')
console.log(scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") == "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.")
