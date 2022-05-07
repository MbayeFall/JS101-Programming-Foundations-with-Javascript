/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".

*/

function revrot(str, sz) {
  if (sz <= 0 || sz > str.length) return "";
  let chunks = [];
  let startingIndex = 0;
  for (let idx = sz; idx <= str.length; idx += sz) {
    if (str[idx] === undefined) {
      chunks.push(str.slice(startingIndex))
    } else chunks.push(str.slice(startingIndex, idx));
    startingIndex = idx;
  }
  chunks.forEach((chunk, idx) => {
    if (isDivisibleByTwo(chunk)) {
      chunks[idx] = chunk.split('').reverse().join('')
    } else {
      chunks[idx] = chunks[idx].split('')
      let removedElement = chunks[idx].shift('');
      chunks[idx].push(removedElement);
      chunks[idx] = chunks[idx].join('');
    }
  })
  
  return chunks.join('');
}

function isDivisibleByTwo(str) {
 let result = 0;
  for (let idx = 0; idx < str.length; idx++) {
    result += str[idx] ** 3;
  }
  return result % 2 === 0;
}
 

/*
input: 2 arguments (string of numbers  and a size) 
output: string of numbers

- cut the string into chunks of size sz
- if last chunk is less than sz , ignore it
- sz <= 0 return ""
- sz > str.length ""

123456
1**3, 2**3, 3**3.... Sum % 2 === 0 , reverse the chunk
  - else rotate it to the left by one position
idx = 0
iterator = 6
[123456, 987654]      
- convert the string into an array of chunks
  - create an empty arr
  - create variable index initialized with value of 0
    - iterate over the array, starting from sz, increment the iterator by sz
     - during each iteration, add the slice from index to iterator to the array
     - idx = iterator
- iterate over the array of chunks one by one
  - during each iteration, check if sum of cubes of current chunk is divisible by 2
    - if true, reverse the chunk
    - if no, rotate the chunk to the left by one position
- join the chunks into one string of integers 
- return the result
*/
