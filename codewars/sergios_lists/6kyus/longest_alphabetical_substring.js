/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

*/

function longest(str) {
  let arr = [];
  for (let idx = 0; idx < str.length; idx++) {
    let currentChar = str[idx]
    let nextIndex = idx + 1;
  let string = currentChar;
    while (true) {
      if (currentChar <= str[nextIndex]) {
        string += str[nextIndex];
        currentChar = str[nextIndex]
        nextIndex++;
      } else break;
    }
  arr.push(string);
  }
  let longestLengthString = arr.reduce((a, b) => a.length < b.length ? b : a)
  return longestLengthString
}

/*
input: string
output: string (the longest alphabetical substring)

asdfaaaabbbbcttavvfffffdf" => "aaaabbbbctt"
[as, s, df, f, aaaabbbbctt, bbctt]
a
aaaabbbbctta

- create an empty array
- iterate through the string one by one 
- during each iteration, 
  - check the longest valid alphabetical substring
  - add the substring to the empty array
- find the longest length out of all elements on the array
- return the first element that has that length
*/
