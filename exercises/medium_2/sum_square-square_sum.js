// Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

function sumSquareDifference(number) {
  let sum1 = 0;
  let sum2 = 0;
  for (let num = 1; num <= number; num++) {
    sum1 += num;
    sum2 += num ** 2;
  }
  sum1 *= sum1;
  return sum1 - sum2;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/*
input: number;
output: number ()t


- sum1: the sum of the first count positive integers (1 + 2 + 3) ** 2
- sum2: the first count positive integers (1**2 + 2**2 + 3**2)
result = sum1 - sum2

sum1: 1 + 2 + 3 variable store the result
sum2: 
- create a variable sum1 = 0;
- create a variable sum2 = 0;
- create an iterator that iterates one by one with a starting value 1  until the given numberi
- On each iteration:
  - add the number to sum1
  - add the square of the number to sum2
- square sum1
return sum1 - sum2

*/