let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.map(arr => {
  return arr.filter(number => number % 3 === 0);
})

