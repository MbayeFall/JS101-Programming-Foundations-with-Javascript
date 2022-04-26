// Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

// The array values passed in will only be strings or numbers. The only valid return values are true and false.



function solution(...arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    let remainingSlice = arr.slice(idx + 1)
    let char = arr[idx];
    if (remainingSlice.includes(char)) return true;
  }
  return false;
}


console.log(solution(1, 2, 3))
console.log(solution(1, 2, 3, 2))
console.log(solution('1', '2', '3', '2') )

/*
input: multiples integers(any number of integers)
output: boolean (true or false)

rules;
- Only valid return is true or false
- numbers passed in as argumnets can also be strings

- passed all the numbers received into an array and assign it to a variable
- iterate over the array that we've created 
- during each iteration:
  - select the character and check whether the remaining the array contains the same character
  - if condition is true return true
  - when iteration is over retrun false
*/
