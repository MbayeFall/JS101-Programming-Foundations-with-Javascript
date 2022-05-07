/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/

function inArray(array1,array2){
  let finalArr = [];
  array1.forEach(subs => {
   let isSubstring = array2.some(word => {
     return word.includes(subs);
    })
   if (isSubstring) finalArr.push(subs);
  })
  return finalArr.sort();
}

/*
input: 2 arrays of words
output: array of words (sorted array in lexicographical order of the strings of a1 which are subs a2)

'arp' = 'tlarp'

 - create an empty array
 - iterate over the length of array1 one by one
  - create a variable that represents current substring
 - during each iteration, iterate over the length of array2 one by one 
  - create a variable that represents current string 
  - if current substring  is a substring of current word of arr2
    - iterate over the word, 
    - during each iteration, check if letter matches substrings first letter
    - if yes, check if the remaining letters match 
      - slice the rest of the chars of word
      - iterate over subs,
        - during each iteration, check if character on subs matches the one on sliced chars
      - if they match, then return true
    - return false;
  - add the substring to an empty array
 - return finalArr
*/
