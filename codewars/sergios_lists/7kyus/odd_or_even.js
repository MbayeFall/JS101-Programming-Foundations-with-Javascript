// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

/*
input: array of integers
output: a string ('even' or 'odd')

- sum is odd or even?
- if input is empty array, consider it as [0]

[0, 1, 4] 5 odd
[0, -1, -5] -6 even

- if input length is 0, return even
- calculate the sum of all the integers in the input array
- find the absolute value of the sum
- check if the value is even or odd
- if even return true, else return odd
*/

function oddOrEven(array) {
  if (array.length === 0) return 'even';
  let sum = array.reduce((a, b) => a + b, 0);
  sum = Math.abs(sum);
  return sum % 2 === 0 ? 'even': 'odd';
}

console.log(oddOrEven([0])) // 'even';
console.log(oddOrEven([0, 1, 4])) // 'odd';
console.log(oddOrEven([0, -1, -5])); // 'even';