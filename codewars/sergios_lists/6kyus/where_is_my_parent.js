/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

function findChildren (dancingBrigade) {
  dancingBrigade = dancingBrigade.toLowerCase().split('');
  dancingBrigade.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else return 0
  });
  dancingBrigade.forEach((char, idx, arr) => {
    if (arr[idx - 1] === undefined || char !== arr[idx - 1].toLowerCase()) arr[idx] = char.toUpperCase();
  })
  return dancingBrigade.join('');
}

/*
input: string of letters
output: string of letters with a different order

- uppercase letters stands for mothers
- lowercase for children 
- uppercase letters are unique

uwwWUueEe ==> EeeUuuWww
aaabbcccdddddddd

- lowercase the input character
- convert the input into an array of letters
- sort them in an alphabetical order
- turn the first character of each sequence into uppercase
  - iterate over the string
  - during each iteration check if lowercase letter of last index is the same as current index
    - if they're not the same, uppercase current index
- join the array 
- return the string
*/
