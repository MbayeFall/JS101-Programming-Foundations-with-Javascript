let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

const VOWELS = ['a', 'e', 'i', 'u', 'o']

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(letter => {
      if (VOWELS.includes(letter)) console.log(letter);
    })
  })
})