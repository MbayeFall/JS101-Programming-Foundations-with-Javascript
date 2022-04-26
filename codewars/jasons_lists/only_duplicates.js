// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

function onlyDuplicates(str) {
  let obj = {};
  str.split('').forEach(char => {
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else obj[char] = 1;
  })
  let finalStrArr = str.split('').filter(char => {
    return obj[char] > 1
  })
  let finalStr = finalStrArr.join('')
  console.log(finalStr)
}

onlyDuplicates('colloquial');
