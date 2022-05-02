// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'.

/*
input: number
output: an array that contains numbers by which the input is divisible with

- input is always > 1
- output cannot include the number 1
- output array should be sorted from smallest to largest
- if number is not divisible return "13 is prime"

[]
2, 3, 4, 5, 6, 7
12

- create an empty array
- start iterating from 2 until iterator is <= number / 2
- during each iteration, check if the number can be divided by the iterator
  - if yes, add the iterator to the array
return the array
- if number is not divisible return "13 is prime"
*/

function divisors(number) {
  let arr = [];
  for (let num = 2; num <= number / 2; num++) {
    if (number % num === 0) arr.push(num);
  }
  if (arr.length === 0) return `${number} is prime`
  return arr;
}

// Example:
console.log(divisors(12)); // should return [2,3,4,6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"