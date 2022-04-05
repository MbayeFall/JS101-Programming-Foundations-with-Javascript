let numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(0).reverse()); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(0).sort((num1, num2) => num2 - num1)); // [ 5, 4, 3, 2, 1 ]

// alternate way
let reversedArray = [];
[...numbers].forEach(function(number){
  reversedArray.unshift(number);
})