//The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

//The result array should be sorted in ascending order of values.

//Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

function twosDifference(input){
 let finalArr = [];
  input.sort((a, b) => a - b);
  input.forEach((num, idx) => {
    let innerArray = [];
    if (input.slice(idx + 1).includes(num + 2)) {
      innerArray.push(num, num + 2);
      finalArr.push(innerArray);
    }
  })
  return finalArr;
}
