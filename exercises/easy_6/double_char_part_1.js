function repeater(word) {
  let string = "";
  word.split('').forEach(char => string += char + char);
  return string;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""