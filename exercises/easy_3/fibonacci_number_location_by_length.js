function findFibonacciIndexByLength(number) {
  let firstNum = 1n;
  let secondNum = 1n;
  let newNumber = firstNum + secondNum;
  let index = 3n
  for (let count = 0; String(newNumber).length < number; count++) {
    firstNum = secondNum;
    secondNum = newNumber;
    newNumber = firstNum + secondNum;
    index += 1n;
  }
  return index;
}

findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;