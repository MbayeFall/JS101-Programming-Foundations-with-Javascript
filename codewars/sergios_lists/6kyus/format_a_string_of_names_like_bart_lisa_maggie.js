/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

function list(names){
  if (names.length === 0) return '';
  
  let arr = [];
  
  names.forEach(obj => {
    arr.push(obj.name)
  })
  
  let finalStr = stringFormatting(arr);
  return finalStr;
}

function stringFormatting(arr) {
  switch (arr.length) {
      case 1:
        return arr[0];
        break;
      case 2: 
        return arr.join(' & ');
        break
      default:
        let firstPart = arr.slice(0, arr.length - 1);
        let lastPart = ' & ' + arr[arr.length - 1];
        firstPart = firstPart.join(', ')
        return firstPart + lastPart;
  }
}
/*
input: an array containing objects with name properties
output: a string with the names separated by commas and an amperSand

rules:

- the last two names should be separated by ampersand
- the rest by commas
- the objects will only contain A-Z characters
- An empty array should return an empty string

[]
[ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
['Bart', 'Lisa', 'Maggie']

- create an empty array
- iterate over the given array one by one
- During each iteration, select the value of the name property
  - push the value to the empty array declared initially
- create a helper function for string formatting
  - if names is 1, return name
  - if names is 2, return name & name
  - if name is >= 3, return name, name & name
- return the output
*/
