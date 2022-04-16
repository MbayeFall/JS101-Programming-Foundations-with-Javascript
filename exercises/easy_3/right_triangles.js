function triangle(number) {
  let stars = '*'
  let spaces = ' '
  for (let count = number; count > 0; count--) {
    let output = '';
    output += spaces.repeat(count) + stars;
    stars += '*';
    console.log(output)
  }
}

triangle(5);

triangle(9);