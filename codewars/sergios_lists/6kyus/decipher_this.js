/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
  let codedWords = str.split(' ');
  let uncodedWords = codedWords.map(word => {
    return convertWord(word);
  })
  let finalStr = uncodedWords.join(' ');
  return finalStr;
}; 

function convertWord(codedWord) {
  let number = "";
  let word = "";
  codedWord.split('').forEach(char => {
    if (isNaN(Number(char))) {
      word += char;
    } else number += char;
  })
 let finalFirstLetter = String.fromCharCode(number);
 word = word.split('');
 let wordFirstLetter = word[0];
 let wordFinalLetter = word[word.length - 1];
 word[0] = wordFinalLetter;
 word[word.length - 1] = wordFirstLetter;
  let finalRemainingLetters = word.join('');
  let finalWord = finalFirstLetter + finalRemainingLetters;
  return finalWord;
}

/*
input: string (coded message)
output: string (decoded message)

- the second letter and the last one are switched
- the first letter is replaced by its character code 
- the rules apply for each word

'72olle 103doo 100ya'
[72.., 103..., 100..]
72olle
[72, olle]
Hello
- convert the string into an array of words seperated by spaces
- iterate over the array one by one, 
  - during each iteration, convert the word into a decoded message
    - separate the number from the letters
    - get the letter from the character code
    - switch the first character of the word with the last character 
    - concatenate the letter we got from the character code to the word that has been switched
- join the words using a space as a seperator 
- return the result
*/
