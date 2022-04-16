function substrings(string) {
  let arr = [];

  for (let index1 = 0; index1 < string.length; index1++) {
    let currentIteratingWord = string.slice(index1)
    for (let index2 = 0; index2 < currentIteratingWord.length; index2++) {
      arr.push(currentIteratingWord.slice(0, index2 + 1))
    }

  }
  console.log(arr)
}

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]