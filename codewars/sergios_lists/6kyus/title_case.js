/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

###Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
###Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if (title === '') return '';
  let exceptions
  if (minorWords === undefined) {
    exceptions = [];
  } else exceptions = minorWords.toLowerCase().split(' ');
  
  let string = title.toLowerCase().split(' ');
  string.forEach((word, idx) => {
    if (!exceptions.includes(word)) string[idx] = capitalize(word);
  })
  string[0] = capitalize(string[0]);
  return string.join(' ');
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
/*
input: 2 Strings
output: A string with some characters uppercased

- if each word in the string is Capitalized (first letter uppercase);
- if word is considered exception, it's entirely lowerCase unless it's the first word
- the second argument is the least of the exceptions (words seperated by spaces)

titleCase('a clash of KINGS', 'a an the of') 'A Clash of Kings';


- create a helper function for capitalization
- create an exceptions variable and store all the exceptions in that variable 
  - put the exceptions into an array. (all exceptions have to be lowercase)
  - store in a var
- store arg 1 in an array of words
- lowercasing all words
- then capitalize all the words except the ones that are on the exception list
- capitalize first index
- join 
-return
*/
