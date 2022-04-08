let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(arr, number) {
  let newArr = [];
  for (let counter = 0; counter < arr.length; counter++) {
    newArr.push(arr[counter] * number);
  }
  console.log(newArr);
}


multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]