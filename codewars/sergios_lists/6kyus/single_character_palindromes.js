/*
You will be given a string and you task is to check if it is possible to convert that string into a palindrome by removing a single character. If the string is already a palindrome, return "OK". If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", otherwise return "not possible". The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 
More examples in the test cases.

Good luck!
*/

function solve(s) {
  if (isPalindrome(s)) return 'OK';
  let arr = s.split('');
  for (let idx = 0; idx < arr.length; idx++) {
      let currentWord = arr.slice(0);
      currentWord.splice(idx, 1);
      if (isPalindrome(currentWord.join(''))) return 'remove one';
    }    
  return 'not possible'
};

function isPalindrome(str) {
 return str === str.split('').reverse().join('')
}

/*
input: a string 
output: a string (OK, removeone, notpossible) depending on situation

- if the string a palidrome, return OK
- can be turnt into a palindrome by removing only one character, return "remove one"
- the first two cases are not valid, not possible
- input is only lowerCase characters

if word is the same as word reverse (palindrome)

solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 

abbaab
bbaab
abaab
abaab
abbab...

- define a helper function that checks whether a word is a palindrome
- check if initial word is a palindrome
  - if true, return 'OK'
- convert the string into an array
- iterate over the array, during each iteration
  - create a word with the current index removed
  - check if that word is a palindrome
  - if true, return 'remove one'
- return 'not possible'

*/
