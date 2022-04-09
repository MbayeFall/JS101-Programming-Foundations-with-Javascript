function sequence(times, num) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < times; i++) {
    count += num;
    arr.push(count);
  }
  return arr;
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []