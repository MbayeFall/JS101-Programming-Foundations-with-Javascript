/*
Build up a method that takes an integer and formats it to a 'time - like' format.

The method must raise an exception if its hour length is less than 3 digits and greater than 4.

Example:
solution(800); // should return '8:00'
solution(1000); // should return '10:00'
solution(1451); // should return '14:51'
solution(3351); // should return '33:51'
solution(10000); // should raise an exception
*/

function solution(hour) {
  let finalStr = "";
  hour = String(hour);
  if (hour.length < 3 || hour.length > 4) return error;
  let hours;
  let minutes;
  if (hour.length % 2 === 0) {
    hours = hour.slice(0, 2);
    minutes = hour.slice(2);
  } else {
    hours = hour.slice(0, 1);
    minutes = hour.slice(1);
  }
  finalStr = `${hours}:${minutes}`;
  return finalStr;
}

/*
input: number
output: string

build a function that takes a number and turn it into a time format

- if the length of the input is less than 3 or is greater than 4 then return an error           

number => string => array

1000 => 10 : 00  even first two numbers
800  => 8 : 00 odd first number as hour

- if the length of the input is less than 3 or greater than 4, throw an exception
- convert the number into a string
- if the number is even, format it into minutes and seconds using the first two numbers
- if odd use the first number
return the final string
*/
