function swapName(str) {
  let nameArr = str.split(' ')
  let name = nameArr[0];
  let surName = nameArr[1];
  return `${surName}, ${name}` 
}

swapName('Joe Roberts');    // "Roberts, Joe"