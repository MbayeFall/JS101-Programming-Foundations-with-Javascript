function halvsies(arr) {
  let newArr = [];
  if (arr.length % 2 === 1) {
  newArr.push(arr.splice(0, (arr.length / 2) + 1));;
  } else {
    newArr.push(arr.splice(0, (arr.length / 2)));
  }
  newArr.push(arr.splice(0));
  console.log(newArr)
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]