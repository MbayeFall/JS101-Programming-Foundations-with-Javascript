/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

function findOutlier(integers){
  let oddNumbers = 0;
  let evenNumbers = 0;
  for (let idx = 0; idx < 3; idx++) {
    Math.abs(integers[idx]) % 2 === 0 ? evenNumbers++ : oddNumbers++;
  }

  if (oddNumbers > evenNumbers) {
   return integers.find(num => Math.abs(num) % 2 === 0);
  } else return integers.find(num => Math.abs(num) % 2 === 1);
}

/*
input: array of integers (odd or even)
output: a unique integer

- all numbers are odd except one , or all numbers are even except one
- find the unique number that doesn't respect the rule (outlier)
- minimum length is 3


- iterate over the first three characters, check if more odd numbers of more even numbers
- if more even numbers
  - iterate over the given array and return the first odd number
- if more odd numbers 
  - iterate over the given array and return the first even number
*/

