/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
  let arr = [];
  s.split('').forEach(char => {
    if (char !== '#') {
      arr.push(char);
    } else arr.pop();
  })
  return arr.join('');
}
  
/*
input: string that potentially contains hashes
output: a string with all the hashes removed

- hash represents backspace

"abc#d##c" 
abd##c
ac 

- create an empty array
- iterate over the string one by one
- check if character is a #
  if yes, remove the last element of the array
  if no, add the current elements to the array
*/
