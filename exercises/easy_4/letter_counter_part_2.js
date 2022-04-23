function wordSizes(string) {
  if (!string) return {};
  let obj = {};
  string = string.split('')
                 .filter(char =>  isLetter(char) || char === ' ')
                 .join('')
                 .split(' ');
  
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

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
