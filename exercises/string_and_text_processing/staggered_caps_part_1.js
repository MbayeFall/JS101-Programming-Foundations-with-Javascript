function staggeredCase(string) {
  string = string.split('')

  for (let index = 0; index < string.length; index += 2) {
    let char = string[index];
    string[index] = char.toUpperCase();
  }
  for (let index = 1; index < string.length; index += 2) {
    let char = string[index];
    string[index] = char.toLowerCase();
  }
  console.log(string.join(''))
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"