let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let arr1 = arr.map(obj => {
  let newObj = {};
  
  for (let property in obj) {
    newObj[property] = obj[property] + 1
  }

  return newObj
})

console.log(arr);
console.log(arr1);