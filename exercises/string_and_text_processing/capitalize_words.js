function wordCap(string) {
  string = string.split(' ');

  for (let index = 0; index < string.length; index++) {
    let currentWord = string[index];
    string[index] = currentWord[0].toUpperCase() + currentWord.slice(1);
  }

  string = string.join(' ');

console.log(string);
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'