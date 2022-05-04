/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/

sortme = function (names) {
  names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else return 0
  })
  return names;
}

/*
// input: names - unsorted strings
// output: case-agnostic sort

- case insensitive f === F


- sort the given array based on their character
  - compare the lowercase version of the strings during each iteration
  - whichever string is lower gets placed on the left
- return the sorted array
*/
