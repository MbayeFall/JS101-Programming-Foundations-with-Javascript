function wordSizes(string) {
  if (!string) return {};
  let obj = {};
  string = string.split(' ');
  for (let idx = 0; idx < string.length; idx++) {
    let currentWord = string[idx];
 
    if (obj.hasOwnProperty(currentWord.length)) {
      obj[currentWord.length] += 1;
    } else {
      obj[currentWord.length] = 1;
    }
  }
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// - if string is falsy return empty object
// - Create an empty object and set it to a variable
// - turn the string into an array of words
// - iterate over the array one by one 
// - On each iteration:
//  - check if property exist 
//   - if yes, increment the value by one
//   - if no, create the property(length of word) and initialize it with a value of 1