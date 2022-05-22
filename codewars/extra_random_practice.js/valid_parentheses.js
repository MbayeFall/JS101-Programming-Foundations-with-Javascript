/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
  parens = parens.split('');
  while (true) {
    if (parens.length === 0) break;
    let remainingSlice = parens.slice(1);
    if (parens[0] === ')' || parens[parens.length - 1] === '(' 
                                    || !remainingSlice.includes(')')) return false;
    parens.splice(parens.indexOf(')'), 1);
    parens.shift();      
    }
  return true;
  }

/*
- convert the string into an array of chars
while loop --------
- if first char is closing parenthesis or last char is opening parenthesis return false
- if array length is equal to 0 break loop
- check if the remaining slice includes a closing parenthesis
  - if true, remove the closing parenthesis then the first index
  - if false, return false
- return true
input: string
output: boolean

Problem: take an input string of parentheses and check whether the order of the parenthesis are valid or not 

- if the input is an empty string then return true

')(()))'
the string cannot start with a closing parenthesis
cannot end with opening parenthesis
the number of closing pars and opening pars should be equal 
))((() - false

(((()))) - true

*/
