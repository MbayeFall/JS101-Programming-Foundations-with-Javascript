let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// The bug is caused by a missing semi-colon on line 1, javascript considers line 3 as a continuition of line 1 and tries to read the following line of code let ladder = ''['head', ... ].forEach()