/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

a tuple (t, k) (in Python)
an array [t, k] (in Ruby and JavaScript)
in C, return k and write to the string t passed in parameter
Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.
*/

function f(s) {
  let arr = [];
  for (let idx = 0; idx < s.length; idx++) {
    let currentSub = s.slice(0, idx + 1);
    let finalSub = "";
  
      let times = 0;
    while (finalSub.length < s.length) {
      finalSub += currentSub 
      times++;
    }
    if (finalSub === s) return [currentSub, times]
  }
  return [s, 1];
}

/*
input: string
output: array containing a substring and a number

'abcabcabc' => [abc, 3]
a
ab
aba
abab
'ababab'
aaaaaa
ababab
- create an empty array
- iterate over the length of the string
- During each iteration, slice the word with one more character each time
- repeat the character until its length is no longer inferior to the original word
- compare the the result with the original word
- if it's a match, add the substring as a first index and the current index as a second index of the array
- return the array
if iteration is done and no match. Return array of [original string, 1]
*/
