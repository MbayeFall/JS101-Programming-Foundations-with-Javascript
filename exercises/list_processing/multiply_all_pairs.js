function multiplyAllPairs(arr1, arr2) {
  let productNums = [];
  
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      let product = num1 * num2;
      productNums.push(product);
    })
  })

  productNums.sort((a, b) => a - b);

  return productNums
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]