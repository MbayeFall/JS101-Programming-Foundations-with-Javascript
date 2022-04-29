// In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.

// Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.

// Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.

// More examples in the test cases.

// Good luck!


/*
input: 2 integers n & k
output: A string of numbers

- remove k digits from n and return lowest possible number
- cannot change the order of the digits in n


1 [23056, 13056, 12056, 12356, 12306, 12305]
2 [23056, 13056, 12056, 12356, 12306, 12305] and sort




- convert the number into a String then into an array
- create empty array to compare values after number removal
-------------------------------remove the ideal number
- iterate over the array
- During each iteration retrieve the value after each removal and add it to the empty array
  - clone the current array
  - remove the current character 
  - join the rest of the characters and add to empty array
- duplicate the array in a new variable and sort the array from lowest to highest and store data into the new variable
- store first index as lowest value
- find index of lowest value
- remove the value at the index from the array of numbers
--------------------------------ends here
return the array
123056
*/
function solve(n, k) {
  let arr = String(n).split('');
  for (let count = 0; count < k; count++) {
    let numbers = [];
    arr.forEach((num, idx) => {
      let cloneArr = arr.slice(); 
      cloneArr.splice(idx, 1);
      numbers.push(Number(cloneArr.join('')));
    })
    let duplicateNumbers = numbers.slice(0);
    duplicateNumbers.sort((a, b) => a - b);
    let lowestValue = duplicateNumbers[0];
    let numberIndex = numbers.indexOf(lowestValue);
    arr.splice(numberIndex, 1);
  }
  arr = arr.join('');
  return arr;
};


solve(123056,1) === '12056' //true 
solve(123056,2) === '1056' //true
solve(123056,3) === '056' //true
solve(123056,4) === '05' //true
solve(1284569,1) === '124569' //true
solve(1284569,2) === '12456' //true
solve(1284569,3) === '1245' //true
solve(1284569,4) === '124' //true