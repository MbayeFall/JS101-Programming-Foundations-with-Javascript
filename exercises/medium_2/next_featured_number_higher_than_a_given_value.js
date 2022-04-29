// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.



/*
input: number 
output: number (featured number)

- multiple of 7
- featured number has to be odd
- digits occuring only once 
- maximum number is 9876543201

14621

- start a one by one iterator from the given number to the max number 9876543201
  - if the number meets the following:
    - multiple of 7
    - odd
    - each digit occurs only once
      - iterate over the number 
      - during each iteration check if the number is included in the remaining slice of the array
      - if yes immediately return true
      - When iteration ends return false
  -return number 
-return "There is no possible number that fulfills those requirements."

*/

function featured(number) {
  for (let num = number; num <= 9876543201; num++) {
    if (number === 9876543201) break;
    if (num % 7 === 0 && num % 2 === 1 && !isDuplicated(num)) {
      return num;
    }
  }
  return "There is no possible number that fulfills those requirements."
}


function isDuplicated(number) {
  let arr = String(number).split('');
  for (let idx = 0; idx < arr.length; idx++) {
    let currentNum = arr[idx];
    if (arr.slice(idx + 1).includes(currentNum)) {
      return true;
    }
  }
  return false;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
