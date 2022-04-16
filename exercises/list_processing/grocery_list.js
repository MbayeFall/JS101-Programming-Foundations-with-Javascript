function buyFruit(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let subArray = arr[index];
    for (let count = 0; count < subArray[1]; count++) {
      newArr.push(subArray[0])
    }
  }
  console.log(newArr);
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]