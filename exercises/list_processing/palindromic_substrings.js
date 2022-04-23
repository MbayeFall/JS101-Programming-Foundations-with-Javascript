function palindromes(string) {
  let palindromes = [];

  for (let idx = 0; idx < string.length; idx++) {
    let word = string.slice(idx)

    for (let subIdx = 0; subIdx < word.length; subIdx++) {
      let currentSubs = word.slice(0, subIdx + 1);
      palindromes.push(currentSubs);
    }
  }

  palindromes = palindromes.filter(substring => palindromeChecker(substring));
  
  return palindromes;
}


function palindromeChecker(string) {
  if (string.length === 1 || string.includes(' ')) return false;
  return string.split('').reverse().join('') === string;
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]