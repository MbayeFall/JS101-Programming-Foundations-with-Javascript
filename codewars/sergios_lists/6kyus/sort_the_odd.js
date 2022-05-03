//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
/*
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

function sortArray(array) {
  let oddNumbers = [];
  array.forEach(char => {
    if (Math.abs(char) % 2 === 1) oddNumbers.push(char);
  })
  oddNumbers.sort((a, b) => a - b)
  array.forEach((char, idx) => {
    if (Math.abs(char) % 2 === 1) {
      array[idx] = oddNumbers[0];
      oddNumbers.shift();
    }
  })
  return array;
}

/*
input: arr of integers
output: arr of integers where some numbers are sorted

- We have to sort the odd numbers
- leave even numbers at their original position
 0  1  2  3  4
[5, 8, 6, 3, 4]

[5, 3]
[3, 5]

-  create an empty array (1)
- iterate through the given array one by one
- During each iteration, check if character is odd
  - if yes, add it to the empty array
- sort array (1) in an ascending order
- iterate again through the given array
- During each iteration, check if number is odd
  - if yes, reassign the value at the current index to the first value of array (1)
  - remove the first element of the array(1)
- return the given array
*/
