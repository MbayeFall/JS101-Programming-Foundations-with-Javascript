let myNumbers = [1, 4, 3, 7, 2, 6];



function doubleOddIndexNumbers(arr) {
  let newArr = [];
  for (let counter = 0; counter < arr.length; counter++) {
    if (counter % 2 === 1) {
      newArr.push(arr[counter] * 2);
    } else {
      newArr.push(arr[counter]);
    }
  }
  console.log(newArr);
}

doubleOddIndexNumbers(myNumbers);
