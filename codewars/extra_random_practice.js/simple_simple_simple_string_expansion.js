// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// stringExpansion('3abc') === 'aaabbbccc'      // correct
// stringExpansion('3abc') !== 'aaabc'          // wrong
// stringExpansion('3abc') !== 'abcabcabc'      // wrong
// If there are two consecutive numeric characters the first one is ignored.

// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.

// stringExpansion('') === ''

/*
input: string
ouput; string

Problem: based on a given input of number and chars, return the final string with all the numbers gone and the correct occurrences of each character
3abc
[]
a = aaa
b 
3D2a5d2f'

- if the input has no number return original string
- create an empty array
- iterate over the string one by one, during each iteration:
  - check if current char is a letter:
    - if true, check if char behind it is number
      - if true, add the character that number of times in array
      - if not a number and empty array length is 0 add char 1 to array
      - else add the char to arr as many times as the last char added to array
- join the array and return 
*/

function stringExpansion(str) {
  let hasNumber = str.split('').some(char => Number(char) || char === '0');

  if (!hasNumber) return str;

  let arr = [];
  str.split('').forEach((char, idx) => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      if (Number(str[idx - 1]) || str[idx - 1] === '0') {
        arr.push(char.repeat(Number(str[idx - 1])))
      } else if (!Number(str[idx - 1]) && arr.length === 0) {
        arr.push(char)
      } else {
        arr.push(char.repeat(arr[arr.length - 1].length));
      }
    }
  })
  
  return arr.filter(char => char).join('');
}

console.log(stringExpansion('3abc') === 'aaabbbccc');
console.log(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y') === '');
console.log(stringExpansion('3d332f2a') === 'dddffaa');
console.log(stringExpansion('abcde') === 'abcde');
console.log(stringExpansion('a2bcde') === 'abbccddee');
