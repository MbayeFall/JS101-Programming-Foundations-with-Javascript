// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined
  } else if (arr.length === 0) {
    return [];
  } else {
    let arrCopy = arr.slice(0);
    let removedElement = arrCopy.splice(0, 1)[0];
    arrCopy.push(removedElement);
    console.log(arrCopy)
  }
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// // return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

/*
input: array
output: array modified

- move the first element to end of array
- cannot mutate the given array
- return undefined if input not an array
- if input is empty array return input


[3, 5, 2, 9, 1]

- if input not an array, return undefined
- if input is an array with length 0, return empty array
- create a deep copy of the array and store in variable
- remove the first element and store in var
- add that var to the copy as a last element
- return copy 
*/