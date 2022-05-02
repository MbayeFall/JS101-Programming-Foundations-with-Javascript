// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

// Examples:

// given arr[2, 4, 7, 21, 1]
// sorted duplicate arr[1, 2, 4, 7, 21]
//             0   1  2  3
// differences[1, 4, 3, 14]
// number atindex ,  number atindex +1


/*
input: arr of itegers
output: arr 2 closest numbers

- create a deep copy of the array and sort it in an ascending order
- create a new array that will contain the differences between each index
- iterate through array and add diffs to diff array
- create variable that gets the index of first number
- create variable that holds value of index of 2nd number
- get their value from the sorted arr
- get their index from the original array
- return an array containing both values

*/

function closestNumbers(numbers) {
  let sortedNumbers = numbers.slice(0).sort((a, b) => a - b);
  let numberDiffs = [];
  let finalArr = [];
  sortedNumbers.forEach((num, idx) => {
    if (idx !== sortedNumbers.length - 1) {
      let diff = sortedNumbers[idx + 1] - num;
      numberDiffs.push(diff)
    }
  })
  let lowestDiff = numberDiffs.reduce((a, b) => a < b ? a : b);
  let lowestDiffIndex = numberDiffs.indexOf(lowestDiff)
  let firstNum = sortedNumbers[lowestDiffIndex];
  let secondNum = sortedNumbers[lowestDiffIndex + 1];
  numbers.forEach(num => {
    if ([firstNum, secondNum].includes(num)) {
      finalArr.push(num);
    }
  })
  return finalArr;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
