const readline = require('readline-sync');
const color = require('colors');
const emoji = require('node-emoji')

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
  let cardNumbers = userCards.map(card =>card[1]).flat();
  prompt(`${emoji.get('man')} ${`You`.brightGreen} have: ${`${cardNumbers.join(' and ')}`.brightGreen} \n`)
  
}

function askHitOrStay() {
  prompt(`${'1) Hit'.yellow} ${'2) Stay'.cyan}`)

  let userChoice = readline.question().toLowerCase().trim();

  while (!['1', '2', 'hit', 'say'].includes(userChoice)) {
    prompt(`Please choose 1 or 2 ${emoji.get('pray')}`)
    userChoice = readline.question().toLowerCase().trim();
  }
  return askHitOrStay;
}


displayWelcomeMessage();

//initialize deck
let userCards = [];
let dealerCards = [];

//deal starting cards
dealCards(2, userCards);
dealCards(2, dealerCards);

displayCPUFirstCard(dealerCards);
displayUserCards(userCards);

let userChoice = askHitOrStay();





