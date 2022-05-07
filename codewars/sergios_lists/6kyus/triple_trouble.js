/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

function tripledouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  let tripledValues = [];
  for (let idx = 0; idx < num1.length; idx++) {
    let currentValue = num1[idx];
    if (currentValue === num1[idx + 1] && currentValue === num1[idx + 2]) {
      tripledValues.push(currentValue);
    }
  }
  if (tripledValues.length === 0) return 0;
  let isDoubled = false;
  for (let idx = 0; idx < num2.length; idx++) {
    for (let idx2 = 0; idx2 < tripledValues.length; idx2++) {
      let currentValue = num2[idx];
      if (currentValue === tripledValues[idx2]) {
        if (currentValue === num2[idx + 1]) {
          isDoubled = true;
          break;
        }
      }
    }
  }
  return isDoubled ? 1 : 0;
}

/*
input: 2 integers
output: number (count that increments based on a condition)

- if a triple in arg1 and a double in arg 2   return 1

451999277, 41177722899

- convert num1 into a string
- convert num2 into a string
- create a variable called triple value thats holds the character that is tripled
- iterate over num1 one by one
  - during each iteration, check if current value = value on next index && current value = value on index + 2
    - if true current value forms a triple, reassign triple value to current value and break the loop
- when loop ends and triple value = undefined return 0
- create a variable named isDouble = false;
- iterate over num2 
  - check if current value is equal to triple value
    - check if there's a double
      - if there's double then return 1
- return 0
*/
