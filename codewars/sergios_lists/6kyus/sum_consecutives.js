// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1 
// sum of 3 consecutives 4 is 12 
// sum of 0... and sum of 2 
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(s) {
  // your code
}

/*
input: Array of integers
output: array of integers where some numbers are summed up

- We only sum numbers that are the same and consecutives

[1,4,4,4,0,4,3,3,1]

[]
variable: 1
push to var
if value on next index is different from current value (push to array and reset var to 0)
if value is same just add to var

- create an empty array that represents the final Array
- create variable (sum)
- iterate iterate over the array one by one
- during each iteration check if current index matches the next index
  - if yes add current value to variable 
  - if no then add current value to variable, push variable to final array and reset variable to 0
- return the var

*/

function sumConsecutives(arr) {
  let finalArr = [];
  let sum = 0;
  arr.forEach((num, idx) => {
    if (num === arr[idx + 1]) { 
      sum += num;
    } else {
      sum += num;
      finalArr.push(sum);
      sum = 0;
    }
  })
  return finalArr;
}

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1])) //,[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
console.log(sumConsecutives([1,1,7,7,3])) //,[2,14,3], "on list [1,1,7,7,3] you get ")
console.log(sumConsecutives([-5,-5,7,7,12,0])) //,[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")
console.log(sumConsecutives([3,3,3,3,1])) //,[12, 1], "on list [3,3,3,3,1] you get " )
