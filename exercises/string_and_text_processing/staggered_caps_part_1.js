function staggeredCase(string) {
  string = string.split('')

  for (let idx = 0; idx < string.length; idx++) {
    let currentChar = string[idx];
    if (idx % 2 === 1) {
      if (currentChar === currentChar.toUpperCase()) {
        string[idx] = currentChar.toLowerCase();
      } else {
        string[idx] = currentChar.toUpperCase();
      }
    }
  }
  console.log(string.join(''))
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"