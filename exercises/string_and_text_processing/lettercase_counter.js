function letterCaseCount(string) {
  let obj = { lowercase: 0, uppercase: 0, neither: 0};

  string.split('').forEach(char => {
    if (isLetter(char)) {
      if (char === char.toUpperCase()) {
        obj.uppercase += 1;
      } else obj.lowercase += 1;
    } else {
      obj.neither += 1;
    }
  })
  console.log(obj);
}

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }