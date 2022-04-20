function shortLongShort(str1, str2) {
  let shorterString = str1.length < str2.length ? str1 : str2;
  let longerString = str1.length > str2.length ? str1 : str2;
  return shorterString + longerString + shorterString;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"