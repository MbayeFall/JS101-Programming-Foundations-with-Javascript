function sumOfSums(arr) {
  let total = 0;

  for (let index1 = 0; index1 < arr.length; index1++) {
    let currentIteratingNumberArr = arr.slice(0, index1 + 1);
    for (let index2 = 0; index2 < currentIteratingNumberArr.length; index2++) {
      let subTotal = 0;
      subTotal += currentIteratingNumberArr[index2];
      total += subTotal;
    }
  }
  console.log(total);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35