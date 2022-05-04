/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  b.forEach(char => {
    while (true) { 
      if (!a.includes(char)) break;
      a.splice(a.indexOf(char), 1)  
    }
  })
  return a;
}

/*
input: 2 arrays of numbers
output: array of integers

- remove all the numbers in arr1 that are also in arr2

- iterate over the second array
- during each iteration, select the current number from the second array
  - remove all the numbers that are identical to current Number from the first array
    - keep removing the number from the array until array no longer contains the number
- return 1st array
*/
