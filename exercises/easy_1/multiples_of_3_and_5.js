function multisum(number) {
  let allNumbers = [];
  for (let num = 0; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) allNumbers.push(num);
  }
  let total = allNumbers.reduce((acc, cur) => acc + cur, 0);

  return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168