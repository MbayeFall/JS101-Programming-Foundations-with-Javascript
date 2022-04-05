function crunch(string) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i -1]) {
      newStr += string[i];
    }
  }
  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""