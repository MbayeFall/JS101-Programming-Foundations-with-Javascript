// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

/*
input: string
output: string with all the vowels removed

['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
This website is for losers LOL!




- convert the input string into an array of characters 
- filter the array by removing all of the characters that are vowels and store it in a new variable
- join the newVariable using the remaining characters
- return the newVariable
*/
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function disemvowel(str) {
  str = str.split('');
  let finalWord = str.filter(char => {
    if (!VOWELS.includes(char)) return true;
  })
  finalWord = finalWord.join('');
  return finalWord;
}

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"))