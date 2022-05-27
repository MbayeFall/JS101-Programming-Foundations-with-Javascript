// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

/*
input: 2 arrays of integers
output: number

Problem: based on two given arrays return a number after completing different tasks:
        - the two integers have to be of equal length
        - get the difference of integers on both arrays on each index 

- create an empty array
- iterate over the first array one by one, during each iteration:
  - compute absolute value of arr1 at current index - absolute value of arr2 at current index
  - add the square of the result to the new array
- find the sum of the array and divide it by the length of the array
- return the final number
*/

function solution(arr1, arr2) {
  let finalNumbers = [];
  arr1.forEach((num, idx) => {
    let num1 = num;
    let num2 = arr2[idx];

    let squaredNum = (num1 - num2) ** 2;

    finalNumbers.push(squaredNum);
  })
  
  let result = finalNumbers.reduce((acc, cur) => acc + cur, 0) / finalNumbers.length;

  return result;
}

console.log(solution([1, 2, 3], [4, 5, 6]) == 9)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]) == 16.5)
console.log(solution([-1, 0], [0, -1]) == 1)
