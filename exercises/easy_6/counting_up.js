function sequence(number) {
  let arr = [];
  for (let  i = 1; i <= number; i++) {
    arr.push(i);
  } 
  return arr;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]