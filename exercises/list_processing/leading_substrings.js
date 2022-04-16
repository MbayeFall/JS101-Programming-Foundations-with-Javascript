function leadingSubstrings(word) {
  let finalArr = [];

  for (let index = 0; index < word.length; index++) {
    let currentWord = word.substring(0, index + 1);
    finalArr.push(currentWord);
  }

  console.log(finalArr)
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]