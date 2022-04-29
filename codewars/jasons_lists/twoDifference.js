// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twoDifference(arr) {
  let finalArr = [];
  arr.sort((a, b) => a - b);
  arr.forEach((num, idx) => {
    let innerArray = [];
    if (arr.slice(idx + 1).includes(num + 2)) {
      innerArray.push(num, num + 2);
      finalArr.push(innerArray);
    }
  })
  console.log(finalArr)
}

// // Examples
twoDifference([1, 2, 3, 4]) //should return [[1, 3], [2, 4]];

twoDifference([4, 1, 2, 3]) //should also return [[1, 3], [2, 4]];

twoDifference([1, 23, 3, 4, 7]) //should return [[1, 3]];

twoDifference([4, 3, 1, 5, 6]) //should return [[1, 3], [3, 5], [4, 6]];



/*
input: array of integers
output: arr with nested arrays of integers


- pairs of integers with differences of 2 as nested arrays
- the result should be sorted in an ascending order
- no duplicate integers


[[1, 3], [2, 4]]
[1, 3, 4 , 7, 23]
[]

- create outer array
-  sort the given array in an ascending order 
- iterate over the array one by one 
- On each iteration, check if the current number + 2 exist in the remaining slice of the array
  - create the inner array
  - if yes, 
    - push number and push number + 2 in innerArray
    - push innerArray to outer array

*/
