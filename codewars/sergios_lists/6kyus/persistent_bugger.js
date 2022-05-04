/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
  let result = 1;
  num = String(num);
  if (num.length === 1) return 0;
  let times = 1;
  while (true) {
    for (let idx = 0; idx < num.length; idx++) {
      result *= num[idx]
    }
   if (String(result).length === 1) break;
    num = String(result);
    result = 1;
    times++;
  }
  return times;
}

/*
input: positive number
output: number (times multiplication have to be done for input to turn into single digit)

- create a result variable 1
- turn the input into a string 
- times
---------while loop
- iterate over the string 
- during each iteration multiply the num with result and add to it
- increment times
- if the length of result is equal to 1 then break out of the loop 
- return times
*/
