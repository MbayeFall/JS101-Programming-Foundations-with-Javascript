// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  let miniWins = 0;
  ticket.forEach(subArr => {
    subArr[0].split('').forEach(char => {
      if (char.charCodeAt() === subArr[1]) miniWins += 1;
    })
  })
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
bingo([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ], 1)

/*
input: an Array of subarrays
output: a String ('Winner' or 'Loser')

rules:
- each subarray has two indices (string, number)
- character code === number its a mini win
- total number of mini wins >= 2nd argument then winner else loser

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

- create a variable miniwins = 0
- iterate over the given array 
- iterate over the first index of the subarrays
- On each iteration of the first index of the subarrays
  - select the char, check if the character code matches the second index
  - if yes, increment miniwins
- if miniwins >= 2nd argumnet print winner
- else print loser
*/
