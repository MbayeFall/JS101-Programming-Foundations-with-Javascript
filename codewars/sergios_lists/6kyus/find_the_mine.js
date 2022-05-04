/*
You've just discovered a square (NxN) field and you notice a warning sign. The sign states that there's a single bomb in the 2D grid-like field in front of you.

Write a function mineLocation/MineLocation that accepts a 2D array, and returns the location of the mine. The mine is represented as the integer 1 in the 2D array. Areas in the 2D array that are not the mine will be represented as 0s.

The location returned should be an array (Tuple<int, int> in C#) where the first element is the row index, and the second element is the column index of the bomb location (both should be 0 based). All 2D arrays passed into your function will be square (NxN), and there will only be one mine in the array.

Examples:
mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0]
mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1]
mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]
*/

function mineLocation(field){
  let rowIndex;
  let columnIndex;
  field.forEach((subArr, idx) => {
    console.log(subArr)
    if (subArr.includes(1)) rowIndex = idx;
  })
  columnIndex = field[rowIndex].indexOf(1);
  return [rowIndex, columnIndex];
}

/*
input: an array with three nest subArrays
output: an array with a length of 2 (location of the mine)

- mine is represented by 1
- 0 empty areas (not mined)
-  [2, 2] 2 is the row index, 2 is column index

Row ==> where 1 is included on the outer array
column ==> where 1 is located in the subArray

- declare variable row index
- declare variable column index
- iterate over the array one by one
- during each iteration, check if 1 is included in the nested subArray
  - if true, reassign row with the value of the current index
- find the index of one in the subArray where 1 is included
  - reassign column to that index
- return [value of rowIndex, value of columnIndex]
*/
