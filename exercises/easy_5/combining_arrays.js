function union(arr1, arr2) {
 let arr = arr1.concat(arr2);
 let newArr = [];
 arr.forEach(number => {
   if (!newArr.includes(number)) {
     newArr.push(number);
   }
 });
 console.log(newArr);
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]