function multisum(num) {
  let finalNum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      finalNum += i;
    }
  }
  return finalNum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168