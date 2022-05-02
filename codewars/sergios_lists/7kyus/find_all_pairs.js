// Array can be empty or contain only one value; in this case return 0
// If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
// Random tests: maximum array length is 1000, range of values in array is between 0 and 1000


/*
input: an array of integers
output: number (number of pairs)

- if input is empty array return 0
- count all duplicates of same number as 1 
- input length is always going to be <= 1000

number of pairs = 0;
arr1 [1, 2, 2, 20, 6, 20, 2, 6, 2] 
number of current char = 1

{
1 : 1
2: 4
20: 2
}

- create an empty obj
- iterate over the array one by one 
- during each iteration, select the currentNumber ans store in variable
  - create variable that count the number of the same characters 
  - create a variable with a value of a deep copy of original array and remove current num
  - iterate over the copy array
    - during each iteration increment number of current char by 1
    - add property to object name with currentNumber and value of number of currentChar 
- iterate over the object
- delete all the properties that have a value of 1
- iterate over the object
- during each iteration, check if value is even
  - if value !== 1 
    - if even, divide by 2 and assign to that value
    - if odd, decrement by 1 and assign to new value
- create an array of all the values 
- add them together 
- return the value
*/

function findAllPairs(array) {
  let obj = {};
  array.forEach((num, idx) => {
    let arrCopy = array.slice(0);
    let numOfChars = 1;
    arrCopy.splice(idx, 1);
    arrCopy.forEach(num2 => {
      if (num === num2) numOfChars++
      obj[num] = numOfChars;
    })
  })
  for (let num in obj) {
    if (obj[num] === 1) {
      delete obj[num];
    }
  }

  let values = Object.values(obj)
  values = values.map(num => {
    if (num % 2 === 0) {
      return num / 2
    } else return (num - 1) / 2
  })
  let result = values.reduce((a, b) => a + b);
  return result
}

// Examples
console.log(findAllPairs([1, 2, 5, 6, 5, 2]));
// ...because there are 2 pairs: 2 and 5

console.log(findAllPairs([1, 2, 2, 20, 6, 20, 2, 6, 2]));
// ...because there are 4 pairs: 2, 20, 6 and 2 (again)