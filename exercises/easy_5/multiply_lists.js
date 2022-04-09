function multiplyList(arr1, arr2) {
  let newArr = [];
  for (let index = 0; index < arr1.length; index++) {
    newArr.push(arr1[index] * arr2[index]);
  }
  return newArr;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]