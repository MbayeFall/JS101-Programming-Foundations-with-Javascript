// function neutralize(sentence) {
//   let words = sentence.split(" ");

//   words.forEach(word => {
//     if (isNegative(word)) {
//       const index = words.indexOf(word);
//       words.splice(index, 1);
//     }
//   });
//   return words.join(" ");
// };

// function isNegative(word) {
//   return ["dull", "boring", "annoying", "chaotic"].includes(word);
// }

// console.log(
//   neutralize("These dull boring cards are part of a chaotic board game.")
// );
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// The splice method behaves in a very odd way when attempting to splice() elements of the same array you're iterating on. We do not wanna use the splice method in this situation but filter instead.

function neutralize(sentence) {
  let words = sentence.split(" ");

  words = words.filter(word => {
    if (!isNegative(word)) return word;
  })

  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);