// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

/*
input: number
output: number (perfect square after the given one)

- if parameter not perfect square return -1
- parameter is always positive
1  2  3   4   5     11  12
1, 4, 9, 16, 25... 121, 144

1 2 3 4 5
squared

- set up an iterator named squareRoot that starts from 1. 
- create a variable that holds a value named square
- during each iteration we reassign square with the value of index ** 2
- check if value of square is equal to given number, if yes then return (Squareroot + 1) ** 2
- if value of square is superior to given number break the loop
- return -1
*/

function findNextSquare(number) {
  let squareRoot = 1;
  while (true) {
    let square = squareRoot ** 2;
    if (square === number) return (squareRoot + 1) ** 2;
    if (square > number) break;
    squareRoot++;
  }
  return -1;
}


// Examples:(Input --> Output)

console.log(findNextSquare(121)) // ==> 144
console.log(findNextSquare(625)) // ==> 676
console.log(findNextSquare(114)) // ==> -1 since 114 is not a perfect square 