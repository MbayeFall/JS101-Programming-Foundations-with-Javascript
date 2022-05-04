/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
  word = word.toLowerCase();
  let obj = {};
  for (let idx = 0; idx < word.length; idx++) {
    let currentChar = word[idx];
    if (obj.hasOwnProperty(currentChar)) {
      obj[currentChar] += 1;
    } else obj[currentChar] = 1;
  }
  let finalWord = "";
  word.split('').forEach(char => {
    if (obj[char] > 1) { 
      finalWord += ')';
    } else finalWord += '('
  })
  return finalWord;
}

/*
input: string of characters
output: string of parentheses

- if the character appears only once in the string then output of that char '('
- if char appears more than once output ==> ')'
- case insensitive  f === F

"din"      =>  "((("
"recede"   =>  "()()()"

{
r: 1,
e: 3,
c: 1,
d: 1
}

- convert the string to lowercase
- create an empty obj
- iterate over the string one by one 
- during each iteration, select the current character and check if it exists in the object
  - if it does, increment its value by 1
  - if it doesn't create a property that matches the character with a value of 1
- create a variable initialized to an empty string
- iterate over the original string
  - for each character, check if its value is superior to 1 in the object
  - if it is, add ')' to string
  - if not add '('
return string
*/

