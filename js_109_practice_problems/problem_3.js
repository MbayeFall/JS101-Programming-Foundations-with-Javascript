// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.


/*
input: string
output: string with some letters uppercased

- every 4th character in every second word converted to uppercase
- other characters remain unchanged 
- when no 4th character on 2nd word nothing happens]

  0     1    2    3     4     5   6
Lorem Ipsum is simply dummy text of
0123456789
supErcaLifrAgilIstiC
3 we add 4;

- turn the string into an array of words
- iterate over the array one by one
- On each iteration, if the iterator is odd, select the currentWord
  - uppercase every fourth character in that word
    - iterate over the array starting from index 3 (increment index by 4 after each iteration)
    - during each iteration uppercase the current character
  - reassign the word on that index to the new word
- join the new array of words into a string where the words are seperated by spaces
*/

function toWeirdCase(string) {
  let arr = string.split(' ');
  arr.forEach((word, idx) => {
    if (idx % 2 === 1) {
      arr[idx] = upperCaseFourth(word);
    }
  })
  arr = arr.join(' ');
  return arr;
}

function upperCaseFourth(word) {
  word = word.split('')
  for (let idx = 3; idx < word.length; idx += 4) {
    word[idx] = word[idx].toUpperCase();
  }
  return word.join('');
}

toWeirdCase('It is a long established fact that a reader will be distracted') ===
'It is a lonG established facT that a reader wilL be disTracTed';

console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".