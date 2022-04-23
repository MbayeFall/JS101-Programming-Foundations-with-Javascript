// function range(start, end = -1) {
//   let range = [];

//   for (let element = start; element <= end; element++) {
//     range.push(element);
//   }

//   return range;
// }

// function range(end) {
//   return range(0, end);
// }

// // Examples

// console.log(range(10, 20));
// console.log(range(5));

// The function on line 11 has already been declared and cannot be re-declared. Javascript does not support function overloading

// Modify code
function range(start, end = -1) {
  let range = [];

  if (end === -1) {
    end = start;
    start = 0;
  }

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}


// Examples

console.log(range(10, 20));
console.log(range(5));