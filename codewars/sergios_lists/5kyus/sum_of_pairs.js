/*
Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.
*/

function sumPairs(ints, s) {
  let finalArr = [];
  
  for (let idx = 0; idx < ints.length; idx++) {
    if (ints[idx] + ints[idx + 1] === s) return [ints[idx], ints[idx + 1]];
  }
  
  for (let idx = 0; idx < ints.length; idx++) {
    let intsCopy = ints.slice(0);
    let currentNum = intsCopy[idx]
    intsCopy.splice(idx, 1);
    
    for (let idx2 = 0; idx2 < intsCopy.length; idx2++) {
      let currentIndexNum = intsCopy[idx2];
      
      if (currentNum + currentIndexNum === s) {
        finalArr.push(currentNum);
        finalArr.push(currentIndexNum);
        return finalArr;
      }
    }
  }
  return undefined ;
}

/*
input: array of integers and a number that represents a sum
output: an array of two integers where their sum is equal to the second argument

- negative numbers can appear


[1, 4, 8, 7, 3, 15], 8
[ 4, 8, 7, 3, 15]

- create a final array
- iterate over the given array one by one 
- during each iteration:
  - create a copy of the array
  - create a variable that represents our current number
  - remove the value at the current index
  - iterate over the copy of the array
  - during each iteration:
    - if the current number + the number on current iteration is equal to second argument
    - add the current number to final Array
    - add the number on current iteration to final array
    - return the final Array
- return undefined

*/
