// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.



function letterPercentages(string) {
  let obj = {
    lowercase : '0.00', 
    uppercase : '0.00', 
    neither : '0.00' 
  };
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  string.split('').forEach(char => {
    if (isLetter(char)) {
      if (isUpperCase(char)) {
      upperCaseCount += 1;
    } else lowerCaseCount += 1
    }
  })
  let percentageLower = ((lowerCaseCount * 100) / string.length)
  let percentageUpper = ((upperCaseCount * 100) / string.length)
  let percentageNeither = 100 - (percentageLower + percentageUpper);
  console.log(percentageNeither)
  
  obj['lowercase'] = String(percentageLower.toFixed(2));
  obj['uppercase'] = String(percentageUpper.toFixed(2));
  obj['neither'] = String(percentageNeither.toFixed(2));

  return obj;
}

function isLetter(char) {
  if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) return true;
  return false;
}
function isUpperCase(char) {
  if (char === char.toUpperCase()) return true;
  return false;
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }


/*
input: a string
output: object with 3 properties

- each property has a value of a percentage
- properties are lowercase, uppercase, neither
- given string will always contain at least one character

2 3 1     total -------> 100%
          lettercasse _------> ?    letterCase * 100 / total

- create obj with the properties uppercase, lowercase and neither set to the value of 0;
- create 2 variables lowerCase count, uppercase count
- iterate over the array one by one and select character on each iteration
  - check if character is a letter
    - if yes, check if uppercase or lowercase
      - if uppercase, add uppercase count
      - if lowercase, add lowercase count
-  calculate percentage of lowercase 2 decimals
-  calculate percentage of uppercase 2 decimals
- 100% - total
- add the percentages in the object
- return the object
*/