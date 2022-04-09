function reverseWords(string) {
  if (!string.includes(' ')) {
    console.log(string.split('').reverse().join(''))
  } else {
      string = string.split(' ');
      for (let i = 0; i < string.length; i++) {
        if (string[i].length >= 5){
        string[i] = string[i].split('').reverse().join('');
        }
      }
      string = string.join(' ')
      console.log(string)
  }
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"