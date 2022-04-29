// Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).


let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

/*
input: string
output: string containing the number of words

- sentences may end with (.) (?) (!)

"To be or not to be! Is that the question?"

- create new array
- convert the string into an array of words
- iterate over the array one by one
- during each iteration, check if words ends with special character
  - if yes, 
    - remove the words until the current index [[word], [word], [word]]
    - push to new array
- sort the array originally created based on their length in descending order
- return length of first array
*/
[ 1, 2, 3]
function longestSentence(string) {
  string = string.split(' ');
  let sentences = [];
  while (string.length > 0) {
  string.forEach((word, idx) => {
      if (word.endsWith('.') || word.endsWith('?') || word.endsWith('!')) {
        let sentence = string.splice(0, idx + 1);
        sentences.push(sentence)
      }
    })
  }
  sentences.sort((a, b) => b.length - a.length);
  let numOfWords = sentences[0].length;

  return `The longest sentence has ${numOfWords} words.`
}

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(longestSentence("Where do you think you're going? What's up, Doc?"));
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence("To be or not to be! Is that the question?"));
// To be or not to be!
//
// The longest sentence has 6 words.