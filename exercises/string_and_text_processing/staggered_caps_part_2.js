function staggeredCase(string) {
  let needUpper = true;
  return string
  .split('')
  .map(char => {
    char = char.toLowerCase();
    if (isLetter(char)) {
      if (needUpper) {
        needUpper = false;
        return char.toUpperCase();
      } else {
        needUpper = true;
        return char;
      }
    }
  }).join('');
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"



