let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(arr => {
  if (typeof arr[0] === 'number') {
    return arr.sort((a, b) => b - a)
  } else {
    arr.sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        0
      }
    })
  }
})

console.log(arr)