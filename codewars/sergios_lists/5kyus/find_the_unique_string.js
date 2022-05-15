/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.
*/

function findUniq(arr) {
  let newArr = arr.map(char => {
    if (char.trim() === '') return '';
    return char.toLowerCase()
  })
  let finalStrIdx;
  if (isSameLetters(newArr[0], newArr[1])) {
    for (let idx = 0; idx < newArr.length; idx++) {
      let currentChar = newArr[idx]
      if (!isSameLetters(currentChar, newArr[0])) finalStrIdx = idx;
    }
  } else {
    if (newArr[0] === newArr[2]) {
      finalStrIdx = 1;
    } else finalStrIdx = 0;
  }
  return arr[finalStrIdx];
}

function isSameLetters(word1, word2) {
  word1 = word1.split('');
  word2 = word2.split('');
  let isIncluded1 = word1.every(char => word2.includes(char))
  let isIncluded2 = word2.every(char => word1.includes(char))
  return isIncluded1 && isIncluded2;
}
/*
input: array of substrings
output: a string

- return a unique string 
- spaces are not significant
- case insensitive a === A
abc abab
[aa, bbbb, aaa, ]
index0 = index1
trying to find index of unique number
- create a copy of the array with all the elements lowercased
- if index0 = index1 iterate over the array and during each iteration check if current word have same chars as index0
  if false, current index is unique string's index
- if index0 != index1,
  - check if index0 = index2
  - if true unique string's index is index1;
  - if false unique string's index is index0
  
-- helper function, find if they have the same letters
 - iterate over one string and check if all leters are included in other word
 - iterate over the other string and do the same
 if both true return true else return false
*/

