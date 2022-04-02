function gap(length, character) {
  let str = ''
  for (let i = 0; i < length; i++) {
    str += character;
  }
  return str
}

function logInBox(string) {
  console.log(`+-${gap(string.length, '-')}-+`);
  console.log(`|${gap(string.length + 2, ' ')}|`)
  console.log(`| ${string} |`);
  console.log(`|${gap(string.length + 2, ' ')}|`)
  console.log(`+-${gap(string.length, '-')}-+`);
}

logInBox('To boldly go where no one has gone before.');