function isPalindrome(string) {
  return string.split('').reverse().join('') === string; 
}

function isRealPalindrome(string) {
 string = string.toLowerCase();
 let stringArr = string.split('');
 let finalStr = '';
 let arr = stringArr.filter(char => char >= 'a' && char <= 'z');
 let arr1 = arr.join('')
 let arr2 = arr.reverse().join('');
 return arr1 === arr2;
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false