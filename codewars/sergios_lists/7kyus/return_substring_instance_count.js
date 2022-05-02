// Complete the solution so that it returns the number of times the search_text is found within the full_text.

// Usage example:

console.log(solution('aa_bb_cc_dd_bb_e', 'bb')) //# should return 2 since bb shows up twice
console.log(solution('aaabbbcccc', 'bbb')) //# should return 1


function solution(str, chars) {
  let arr = str.split('');
  let count = 0;
  arr.forEach((arrChar, idx1) => {
    if (arrChar === chars[0]) {
      let same = chars.split('').every((char, idx2) => {
        return char === arr[idx1 + idx2]
      })
      if (same === true) count++
    }
  })
  return count;
}

/*
input: string
output: string (number of times given string is found on original string)

counter = 0
'aa_bb_cc_dd_bb_e', 'bb'
if current char is equal to first character of given string
[a, a, b, b, c, c, d, d, b, b, e] bb

- convert the given string into an array of chars
- iterate over the arr one by one 
- during each iteration check if current character matches the first char of given chars
  - if yes, then we wanna start a nested iterator that iterates over the given chars that starts on 0 index, one by one
    - during each iteration, check if current char matches the char on the equivalent index on the arr
if every char was true then add 1 to count
*/