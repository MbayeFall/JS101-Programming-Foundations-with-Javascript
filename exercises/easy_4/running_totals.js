function runningTotal(arr) {
  let newArr = [];
  let totaler = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + totaler);
    totaler += arr[i];
  }
  console.log(newArr);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []