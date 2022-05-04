/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let finalArr = [];
  let arr = String(num).split('');
  arr.forEach((num, idx) => {
    if (num !== '0') {
      let numberOfZeros = arr.slice(idx + 1).length;
      let remainingZeros = '0'.repeat(numberOfZeros)
      finalArr.push(num + remainingZeros)
    }
  })
  finalArr = finalArr.join(' + ');
  return finalArr;
}

/*
input: number
output: the expanded form of the number (string)

- all inputs will be greater than zero

70304
70304
 
- create final arr;
- convert the number into a string then an array
- iterate over the array one by one 
- during each iteration, check if the num is different from zero
  - if true, add  the number and the necessary remaining zeros as an index of the array
- join the array using + as a separator
- return it
*/
