// Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

// The input is restricted to contain no numerals and only words containing the english alphabet letters.

// Example:

// alphabetized("The Holy Bible") # "BbeehHilloTy"

/*
input: string
output: string

Problem: based on a given string, return another string with a different structure

- case insensitive 
- alphabetical order of appearance
- only letters on the output
- if input is empty string return empty string

- convert the string into an array of chars
- remove all the whitespaces and punctuations
- if the length of the array is 0 return ""
- sort the array in an alphabetical order
- convert the array back into a string
- return the string
*/

function alphabetized(str) {
  let arr = str.split('').filter(char => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');

  if (arr.length === 0) return "";
  
  arr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    } else {
      if (s.indexOf(a) < s.indexOf(b)) {
        return -1;
      } else return 1;
    };
  });

  return arr.join('')
}

console.log(alphabetized("") == "")
console.log(alphabetized(" ") == "")
console.log(alphabetized(" a") == "a")
console.log(alphabetized("a ") == "a")
console.log(alphabetized(" a ") == "a")
console.log(alphabetized("A b B a") == "AabB")
console.log(alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z") == "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ")
