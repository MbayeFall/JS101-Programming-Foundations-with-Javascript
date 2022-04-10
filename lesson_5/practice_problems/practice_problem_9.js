let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(arr => {
  if (typeof arr[0] === 'string') {
    return arr.sort()
  } else {
    return arr.sort((a, b) => a - b)
  }
})

console.log(arr)