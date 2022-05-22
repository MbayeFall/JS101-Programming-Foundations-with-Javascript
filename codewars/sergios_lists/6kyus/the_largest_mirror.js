/*
We'll think that a "mirror" section in an array is a group of contiguous elements ( > 1) such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in [1, 2, 3, 8, 9, 3, 2, 1] is length 3 (the ...1, 2, 3... part). Return the length of the largest mirror section in the given array.

If the mirror doesn't exist or array is empty, return 0.

Some examples:

maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]) → 3
maxMirror([1, 2, 2, 1]) → 4 // palindrome 
maxMirror([1, 2, 1, 4]) → 3 // palindrome part (1, 2, 1)
maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2
maxMirror([1, 2, 3, 6, 7, 3, 2, 1, 5]) → 3
maxMirror([1, 2, 2]) → 2 // palindrome part (2, 2)
maxMirror([1, 2, 3]) → 0 
maxMirror([1, 5]) → 0 
maxMirror([1]) → 0 
*/

const maxMirror = (array) => {
  let longestLength = 0;
  array.forEach((int, idx) => {
    let currentSlice = array.slice(idx);
    for (let idx = 1; idx < currentSlice.length; idx++) {
      let reversedSlice = currentSlice.slice(0, idx + 1).reverse(); 
      
      array.forEach((num, idx) => {
        if (num === reversedSlice[0]) {
          let comparingSlice = array.slice(idx, idx + reversedSlice.length)
          let isPalindrome = reversedSlice.every((num, idx) => {
            return num === comparingSlice[idx];
          })
          if (isPalindrome && reversedSlice.length > longestLength) longestLength = reversedSlice.length;
        }
      })
    }
  })
  return longestLength;
}

/*
- create variable named longestlength initialized to a value of 0
- iterate over the given array one by one 
  - during each iteration, get the slice from current index to last index
  - iterate over the slice one by one starting from the second index (index 1)
  - during each iteration, get the slice from beginning to current index and check
  if the reverse of that index can be found in remaining of array
  - if true, check if current length (length of slice) is bigger than longestLength
    - if true, assign value of longest length to current length
- return the longestLength

problem: return the longest palindrome

- input: array of integers
- output: a number (represents the longest palindrome)

- we can only consider arrays that are longer than 1 (output will be > 1)
- if we can't find a palindrome return 0

[1, 2, 3, 8, 9, 3, 2, 1, 9, 8] 
count = 2;
[1 , 2, 3, 8, 9]
[2, 3, 8 ...]
[3, 8, 9 ...]
[8]
 
2  [1, 2, 3, 8, 9, 3, ]
3
8

*/
