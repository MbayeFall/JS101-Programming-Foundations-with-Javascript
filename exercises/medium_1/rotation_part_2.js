// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

Examples:

function rotateRightmostDigits(num, digit) {
  let arr = String(num).split('');
  let removedNum = arr.splice(-digit, 1)[0];
  arr.push(removedNum);
  arr = Number(arr.join(''));
  return arr;
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/*
input: 2 Numbers
output: a Number

- rotate to the end and shift the remaining digits to the left

735291, 1

- turn the number into an array
- remove the number at the designated index
- Add the number to the end of the array
- join the array into a string
- convert into a number and return
*/