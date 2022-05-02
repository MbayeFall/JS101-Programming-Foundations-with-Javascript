// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

function smallerNumbersThanCurrent(arr) {
  let finalArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    let count = 0;
    let currentNumber = arr[idx];
    let currentArr = arr.slice(0);
    currentArr.splice(idx, 1);
    let currentArr2 = [];
    currentArr.forEach(num => {
      if (!currentArr2.includes(currentArr)) currentArr2.push(num);
    })
    for (let idx1 = 0; idx1 < currentArr2.length; idx1++) {
      if (currentNumber > currentArr2[idx1]) count += 1;
    }
    finalArr.push(count);
  }
  console.log(finalArr)
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

/*
input: array of numbers
output: array with different numbers

- find how many numbers are smaller than each number
- only count unique values

[8, 1, 2, 3] >> [1, 2, 3]

- create finalArr
- iterate over the array one by one 
- during each iteration:
  - set up a count
  - create a variable with value of currentNumber
  - create a deep copy of the original array and store in a variable
  - remove the current value 
  - create a nested iterator
    - if currentNumber is lower than number at current index
      - if yes, increase count
- add the number to the finalArr
- return finalArr


*/