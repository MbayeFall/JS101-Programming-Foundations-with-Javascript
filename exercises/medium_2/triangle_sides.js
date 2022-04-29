// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

function triangle(num1, num2, num3) {
  let arr = [num1, num2, num3].sort((a, b) => a - b);
  if (arr[0] + arr[1] > arr[2] && arr[0] > 0 && arr[1] > 0 && arr[2] > 0) {
    if (num1 === num2 && num2 === num3) {
    return 'equilateral';
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return 'isosceles';
    } else return 'scalene';
  }
  return 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/*
input: 3 numbers that represent lengths
output: String (type of triangle)

- the sum of the two lowest numbers must be greater than the remaining length & every number > 0 (check validity)

1 , 2, 3

- put all the numbers in an array, 
- sort them
- if (index 1 + index 2 > index 3 && number is superior to 0) return invalid
- if 1 = 2 = 3 equilateral
- if index 1 is same as index 2 or if index 1 same as index 3 or index 2 same as index 3 return isosceles
- if 1 !== 2 !== 3 scalene

*/