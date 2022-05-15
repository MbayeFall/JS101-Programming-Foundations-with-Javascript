// In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

/*
input: Strings
output: boolean (true or false)

- repeated subpattern or not 
- case sensitive f !== F

abababab
ababababa

[a, ab, aba, abab]
aaaaaaaa
abababab
a
ab
aba
abab

- iterate over the string, one by one until we reach the middle of the string
- during each iteration:
  - collect the substring from index 0 to currentindex + 1
  - check if we can get the original string by repeating the current char until word is same length as original
  - if yes, return True
- return no
*/

function hasSubpattern(string) {
  if (string.length === 1) return false;
  for (let idx = 0; idx < string.length / 2; idx++) {
    let substring = string.slice(0, idx + 1)
    let fullWord = ""
    while (true) {
      fullWord += substring;
      if (fullWord.length >= string.length) break;
    }
    if (string === fullWord) return true;
  }
  return false;
}

// For example:
 
console.log(hasSubpattern("a") === false); //no repeated pattern
console.log(hasSubpattern("aaaa") === true); //created repeating "a"
console.log(hasSubpattern("abcd") === false); //no repeated pattern
console.log(hasSubpattern("abababab") === true); //created repeating "ab"
console.log(hasSubpattern("ababababa") === false); // cnnot entirely reproduced repeating a pattern
console.log(hasSubpattern("123a123a123a") === true);
console.log(hasSubpattern("123A123a123a") === false);
console.log(hasSubpattern("abbaabbaabba") === true);
console.log(hasSubpattern("abbabbabba") === false);
console.log(hasSubpattern("abcdabcabcd") === false);
