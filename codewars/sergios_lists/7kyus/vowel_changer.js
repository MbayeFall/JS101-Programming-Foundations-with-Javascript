// Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

/*
input: a string and a character (2 string arguments)
ouput: a modified version of the input string

- input never includes uppercase letters

['a', 'e', 'i', 'o', 'u']
- convert the string into an array of characters
- define a newArray where all the vowels are replaced by the 2nd argument
- join the array back into a string
- return the newArr
*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
function vowelChange(str, vow) {
  str = str.split('');
  let newArr = str.map(char => {
    if (VOWELS.includes(char)) return vow;
    return char;
  })
  return newArr.join('');
}

// For Example (input1, vowel) => output:

console.log(vowelChange("hannah hannah bo-bannah banana fanna fo-fannah fee, fy, mo-mannah. hannah!",'i')) // => 'hinnih hinnih bi-binnih binini finni fi-finnih fii, fy, mi-minnih. hinnih!'
console.log(vowelChange('adira wants to go to the park', 'o')) // =>'odoro wonts to go to tho pork'
// There will never be an uppercase letter as an input.



