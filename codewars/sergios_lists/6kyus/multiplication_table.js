/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


multiplicationTable = function(size) {
  let finalArr = [];
  
  for (let num = 1; num <= size; num++) {
    let subArray = []
    let total = 0;
    
    for (let count = 0; count < size; count++) {
      total += num;
      subArray.push(total)
    }
    
    finalArr.push(subArray)
  }
  
  return finalArr;
}

/*


Problem: create NxN multiplication table based on the parameter

input: number
output array of nested subarrays

[[1,2,3], [2,4,6], [3,6,9]]

1 , 1 + 1, 1 + 1 + 1
2 , 2 + 2, 2 + 2 + 2
3 , 3 + 3, 3 + 3 + 3
[]

- create a final Arr variable
- set up an iterator that iterates from 1 to given number
  - create a nested subarray
  - currentNumber
  - create total = 0;
  - during each iteration: 
    - iterate as many times as the given number
    - during each iteration:
      - add the number to total 
      - add total to nested subArray
  - add nested subArray to finalArr
- return the finalArr
*/
*/
