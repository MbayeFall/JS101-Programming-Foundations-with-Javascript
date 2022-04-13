const readline = require('readline-sync');
const color = require('colors');
const emoji = require('node-emoji');

const DECK = {
  hearts: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  diamonds: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  clubs: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'],
  spades: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWelcomeMessage() {
  console.clear();
  prompt('Welcome to the 21 Game!\n'.rainbow);
}

function randomCardGenerator() {
  let colors = Object.keys(DECK);
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];
  let randomNumberIndex = Math.floor(Math.random() * DECK[randomColor].length);
  let randomNumber = DECK[randomColor][randomNumberIndex];
  let randomCard = [randomColor, randomNumber];
  return randomCard;
}

function dealCards(numOfCards, player) {
  for (let times = 0; times < numOfCards; times++) {
    player.push(randomCardGenerator());
  }
}

function displayCPUFirstCard(dealerCards) {
  let firstCardNumber = dealerCards[0][1];
  prompt(`${emoji.get('robot_face')} ${'Dealer'.brightRed} has: ${`${firstCardNumber} and Unknown card`.brightRed}\n`);
}

function displayUserCards(userCards) {
  console.clear();
  let cardNumbers = userCards.map(card => card[1]).flat();

  if (cardNumbers.length <= 2) {
    prompt(`${emoji.get('man')} ${`You`.brightGreen} have: ${`${cardNumbers.join(' and ')}`.brightGreen} \n`);
  } else {
    prompt(`${emoji.get('man')} ${`You`.brightGreen} have: ${`${joinAnd(cardNumbers)}`.brightGreen} \n`);
  }
}

function askHitOrStay() {
  prompt(`${'1) Hit'.yellow} ${'2) Stay'.cyan}`);

  let userChoice = readline.question().toLowerCase().trim();

  while (!['1', '2', 'hit', 'say'].includes(userChoice)) {
    prompt(`Please choose between 1 or 2. ${emoji.get('pray')}`);
    userChoice = readline.question().toLowerCase().trim();
  }
  return userChoice;
}

function addUserCount(userCards) {
  let score = 0;
  let cardNumbers = userCards.map(card => card[1]).flat();

  score = addScore(cardNumbers, score);
  return score;
}

function addDealerCount(dealerCards) {
  let score = 0;
  let cardNumbers = dealerCards.map(card => card[1]).flat();
  score = addScore(cardNumbers, score);
  return score;
}

function addScore(cardNumbers, score) {
  for (let index = 0; index < cardNumbers.length; index++) {
    let currentNumber = cardNumbers[index];
    if (['Jack', 'Queen', 'King'].includes(currentNumber)) {
      score += 10;
    } else if (currentNumber === 'Ace') {
      if (score + 11 > 21) {
        score += 1;
      } else {
        score += 11;
      }
    } else {
      score += Number(currentNumber);
    }
  }
  return score;
}

function ifUserPicksHit(userChoice, userCards) {
  if (['1', 'hit'].includes(userChoice)) {
    dealCards(1, userCards);
  }
}

function printUserGoesBust() {
  prompt(`Oh Oh! You go bust! Dealer wins ${emoji.get('sweat_smile')}`);
}

function busted(count) {
  return count > 21;
}

function printDealerWins() {
  prompt(`${emoji.get('robot_face')} Dealer wins! Better luck next time ${emoji.get('sweat_smile')}`);
}

function printUserWins() {
  prompt(`${emoji.get('man')} You win! Well done with the "Stay" ${emoji.get('trophy')}.`);
}

function ifDealerPicksHit(dealerCount, dealerCards) {
  while (dealerCount < 17) {
    dealCards(1, dealerCards);
    dealerCount = addDealerCount(dealerCards);
  }
}

function printDealerGoesBust() {
  prompt(`Oh Oh! Dealer goes bust! You win ${emoji.get('trophy')}`);
}

function joinAnd(arr, separator = ', ', joinWord = 'and') {
  let finalStr = "";
  let arr1 = arr.slice(0, arr.length - 1);
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return String(arr[0]);
    case 2:
      return `${arr[0]} or ${arr[1]}`;
    default:
      finalStr += arr1.join(separator);
      finalStr += ` ${joinWord} ${arr[arr.length - 1]}`;
      return finalStr;
  }
}

function displayCPUCards(dealerCards) {
  let cardNumbers = dealerCards.map(card => card[1]).flat();

  if (cardNumbers.length <= 2) {
    prompt(`${emoji.get('robot_face')} ${`Dealer`.brightRed} has: ${`${cardNumbers.join(' and ')}`.brightRed} \n`);
  } else {
    prompt(`${emoji.get('robot_face')} ${`Dealer`.brightRed} has: ${`${joinAnd(cardNumbers)}`.brightRed} \n`);
  }
}

function printWinner(userCount, dealerCount) {
  if (userCount > dealerCount) {
    printUserWins();
  } else if (userCount < dealerCount) {
    printDealerWins();
  } else {
    prompt(`It's a tie! ${emoji.get('scales')}`);
  }
}

displayWelcomeMessage();

//initialize deck
let userCards = [];
let dealerCards = [];
let userCount = 0;
let dealerCount = 0;

//deal starting cards
dealCards(2, userCards);
dealCards(2, dealerCards);

//add scores
userCount = addUserCount(userCards);
dealerCount = addDealerCount(dealerCards);
console.log(userCount);

displayUserCards(userCards);
displayCPUFirstCard(dealerCards);

// Ask User Hit or Stay?
while (true) {
  let userChoice = askHitOrStay();
  ifUserPicksHit(userChoice, userCards);
  userCount = addUserCount(userCards);
  displayUserCards(userCards);

  if (['2', 'stay'].includes(userChoice) || busted(userCount)) break;
}

if (busted(userCount)) {
  displayCPUCards(dealerCards);
  printUserGoesBust();
} else {
  ifDealerPicksHit(dealerCount,dealerCards);
  dealerCount = addDealerCount(dealerCards);

  if (busted(dealerCount)) {
    displayCPUCards(dealerCards);
    printDealerGoesBust();
  }
}

if (!(busted(userCount) || busted(dealerCount))) {
  displayCPUCards(dealerCards);
  printWinner(userCount, dealerCount);
}