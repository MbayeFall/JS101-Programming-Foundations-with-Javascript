/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let arr = x.split(' ');
  let longestScoreString = arr.reduce((a, b) => scoreOf(a) < scoreOf(b) ? b : a);
  return longestScoreString
}

const SCORES = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, 
r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}

function scoreOf(word) {
  let score = 0;
  word.split('').forEach(char => {
    score += SCORES[char]
  })
  return score;
}
console.log(scoreOf('nxperujlvtcjdpfyxdttsp'))

/*
input: a string of words
output: a word (the highest scoring word)

- all letters will be lowercase 
- all inputs will be valid
- if two words have the same score return which ever one comes first

{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, 
r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}

- convert the string to an array of words
- calculate the score of each word
- find the word that has the highest score
- return that word
*/
