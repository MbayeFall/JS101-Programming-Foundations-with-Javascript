// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.


function solve(string) {
  let arr = []

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = string[idx];
    let nextIndex = idx + 1;
    if (isVowel(currentChar)) {
      while (true) {
        if (!isVowel(string[nextIndex])) break;
        nextIndex += 1;
      }
    }
    arr.push(string.slice(idx, nextIndex));
  }
  
  let highestValue = arr.reduce((a, b) => {
    if (a.length > b.length) {
      return a;
    } else return b;
  })
  return highestValue.length;
}

function isVowel(char) {
  if (['e', 'i', 'o', 'u', 'a'].includes(char)) return true;
  return false;
}


console.log(solve("codewarriors"))                //==> 2
console.log(solve("suoidea"))                     //==> 3
console.log(solve("ultrarevolutionariees"))       //==> 3
console.log(solve("strengthlessnesses"))          //==> 1
console.log(solve("cuboideonavicuare"))           //==> 2
console.log(solve("chrononhotonthuooaos"))        //==> 5
console.log(solve("iiihoovaeaaaoougjyaw"))        //==> 8

/*
input: string
output: number ( consecutive vowels)


- input has no space
0123456789te
codewarriooooors
['o', 'e', 'a', 'io']
['o', 'e', 'a', 'io', 'o' ]

- set up an iterator that iterates over the string one by one
- on each iteration check if char is a vowel
  - if yes, keep checking the following index until char is no longer a vowel
  - concatenate all the characters that we checked and add them to the array
- find the longest length of the array and return it
*/