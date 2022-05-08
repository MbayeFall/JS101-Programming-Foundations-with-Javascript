// Cara is applying for several different jobs. The online application forms ask her to respond within a specific character count. Cara needs to check that her answers fit into the character limit.

// Annoyingly, some application forms count spaces as a character, and some don't.

// Your challenge:

// Write Cara a function charCheck() with the arguments:

// "text": a string containing Cara's answer for the question
// "max": a number equal to the maximum number of characters allowed in the answer
// "spaces": a boolean which is True if spaces are included in the character count and False if they are not
// The function charCheck() should return an array: [True, "Answer"] , where "Answer" is equal to the original text, if Cara's answer is short enough.

// If her answer "text" is too long, return an array: [False, "Answer"]. The second element should be the original "text" string truncated to the length of the limit.

// When the "spaces" argument is False, you should remove the spaces from the "Answer".

/*
input: 3 arguments (text (string), maxcharacter(number), spaces(boolean))
output: an array, (boolean, string)

(text, maxchar, spaces)
Cara Hertz
['c', 'a', 'r'... 'z']

- convert the string into an array of characters
- if spaces is false, remove all the spaces from the array
- if the length of the array is inferior or equal to the maximum character 
  - convert the arr to a string joined with no seperators
  - return [True, joinedArray]
- otherwise 
  - get the slice of string up to the maxchar
  - return [False, slice]
*/

function charCheck(text, maxChar, isSpace) {
  text = text.split('');
  if (!isSpace) text = text.filter(char => char !== ' ')
  if (text.length <= maxChar) {
    text = text.join('');
    console.log([true, text])
    return [true, text];
  } else {
    text = text.join('').slice(0, maxChar); 
    console.log([false, text])
    return [false, text];
  }
}

// For example:

console.log(charCheck("Cara Hertz", 10, true) // [ true, "Cara Hertz" ]);
console.log(charCheck("Cara Hertz", 9, false) // [ true, "CaraHertz" ]);
console.log(charCheck("Cara Hertz", 5, true) // [ false, "Cara " ]);
console.log(charCheck("Cara Hertz", 5, false) // [ false, "CaraH" ]);
