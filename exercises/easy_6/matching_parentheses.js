function isBalanced(string) {
  string = string.split('').filter(char => {
    return ['(', ')'].includes(char);
  })
  if (string[string.length - 1] !== '(' && 
  string[0] !== ')' && 
  checkParenthesesEquality(string)) {
    return true;
  } else return false;
}

function checkParenthesesEquality(arr) {
  let leftParCount = 0;
  let rightParCount = 0;
  arr.forEach(char => {
    if (char === '(') {
      leftParCount += 1;
    } else if (char === ')') {
      rightParCount += 1;
    }
  })
  return leftParCount === rightParCount;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);