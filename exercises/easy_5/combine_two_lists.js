function interleave(arr1, arr2) {
  let arr = [arr1, arr2];
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr[0][i]);
    newArr.push(arr[1][i]);
  }
console.log(newArr);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]