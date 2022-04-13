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

function randomCardGenerator() {
  let colors = Object.keys(DECK);
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomColorIndex];
  let randomNumberIndex = Math.floor(Math.random() * DECK[randomColor].length);
  let randomNumber = DECK[randomColor][randomNumberIndex];
  let randomCard = [randomColor, randomNumber];
  return randomCard;
}

function cardDuplicateChecker(playerCards, newCard) {
  let valid = true;
  for (let card = 0; card < playerCards.length; card++) {
    if (playerCards[card][0] === newCard[0] &&
       playerCards[card][1] === newCard[1]) valid = false;
  }
  return valid;
}

function dealCards(numOfCards, player) {
  for (let times = 0; times < numOfCards; times++) {
    let randomCard = randomCardGenerator();
    while (cardDuplicateChecker(player, randomCard) === false) {
      randomCard = randomCardGenerator();
    }
    player.push(randomCard);
  }
}

function displayCPUFirstCard(dealerCards) {
  let firstCardNumber = dealerCards[0][1];
  prompt(`${emoji.get('robot_face')} ${'Dealer'.brightRed} has: ${`${firstCardNumber} and Unknown card`.brightRed}\n`);
}

function displayUserCards(userCards, userScore, dealerScore) {
  console.clear();

  displayScores(userScore, dealerScore);

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
  let count = 0;
  let cardNumbers = userCards.map(card => card[1]).flat();

  count = addCount(cardNumbers, count);
  return count;
}

function addDealerCount(dealerCards) {
  let count = 0;
  let cardNumbers = dealerCards.map(card => card[1]).flat();
  count = addCount(cardNumbers, count);
  return count;
}

function addCount(cardNumbers, count) {
  let numberOfAces = 0;
  for (let index = 0; index < cardNumbers.length; index++) {
    let currentNumber = cardNumbers[index];
    if (['Jack', 'Queen', 'King'].includes(currentNumber)) {
      count += 10;
    } else if (currentNumber === 'Ace') {
      count += 11;
      numberOfAces += 1;
    } else {
      count += Number(currentNumber);
    }
  }

  for (let num = 0; num < numberOfAces; num++ ) {
    if (count > 21) count -= 10;
  }
  return count;
}

function ifUserPicksHit(userChoice, userCards) {
  if (['1', 'hit'].includes(userChoice)) {
    dealCards(1, userCards);
  }
}

function displayCounts(userCount, dealerCount) {
  prompt(`${emoji.get('man')} ${`Your Count: ${userCount}`.brightGreen} ${emoji.get('robot_face')} ${`Dealer Count: ${dealerCount}`.brightRed}\n`);
}

function printUserGoesBust() {
  prompt(`${`Oh Oh! You go bust! ${emoji.get('robot_face')} Dealer wins!`.inverse} ${emoji.get('yum')}\n`);
}

function addScore(score) {
  score += 1;
  return score;
}

function displayScores(userScore, dealerScore) {
  prompt(`${emoji.get('man')} ${`Score: ${userScore}`.brightGreen} ${emoji.get('robot_face')} ${`Score: ${dealerScore}`.brightRed}\n`);
}

function busted(count) {
  return count > 21;
}

function printDealerWins() {
  prompt(`${`${emoji.get('robot_face')} Dealer wins! Better luck next time`.inverse} ${emoji.get('yum')}\n`);
}

function printUserWins() {
  prompt(`${`${emoji.get('man')} You win! Well done with the "Stay"`.inverse} ${emoji.get('trophy')}\n`);
}

function ifDealerPicksHit(dealerCount, dealerCards) {
  while (dealerCount < 17) {
    dealCards(1, dealerCards);
    dealerCount = addDealerCount(dealerCards);
  }
}

function printDealerGoesBust() {
  prompt(`${`Oh Oh! Dealer goes bust! ${emoji.get('man')} You win`.inverse} ${emoji.get('trophy')}\n`);
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

function printTie() {
  prompt(`${`It's a tie!`.inverse} ${emoji.get('scales')}\n`);
}

function displayDealerCards(dealerCards) {
  let cardNumbers = dealerCards.map(card => card[1]).flat();

  if (cardNumbers.length <= 2) {
    prompt(`${emoji.get('robot_face')} ${`Dealer`.brightRed} has: ${`${cardNumbers.join(' and ')}`.brightRed} \n`);
  } else {
    prompt(`${emoji.get('robot_face')} ${`Dealer`.brightRed} has: ${`${joinAnd(cardNumbers)}`.brightRed} \n`);
  }
}

function checkWinner(userCount, dealerCount) {
  if (userCount > dealerCount) {
    return 'user';
  } else if (userCount < dealerCount) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function checkGrandWinner(userScore, dealerScore) {
  if (userScore === 5) {
    return 'user';
  } else if (dealerScore === 5) {
    return 'dealer';
  } else {
    return null;
  }
}

function printUserGrandWinner() {
  prompt(`${`${emoji.get('man')} You are the Grand Winner! Congrats!`.inverse} ${emoji.get('tada')}\n`);
}

function printDealerGrandWinner() {
  prompt(`${`${emoji.get('robot_face')} Dealer is the Grand Winner!`.inverse} ${emoji.get('stuck_out_tongue_winking_eye')}\n`);
}

function askForContinueGame() {
  prompt('Continue? (y/n)');
  let resume = readline.question().toLowerCase().trim();

  while (!['y', 'yes', 'n', 'no'].includes(resume)) {
    prompt(`Please choose y or n ${emoji.get('pray')}`);
    resume = readline.question().toLowerCase().trim();
  }
  return resume;
}

function askForRestart() {
  prompt('Restart? (y/n)');
  let restart = readline.question().toLowerCase().trim();

  while (!['yes', 'no', 'y', 'n'].includes(restart)) {
    prompt(`Please enter y or n ${emoji.get('pray')}`);
    restart = readline.question().toLowerCase().trim();
  }
  return restart;
}

function printThanksMessage() {
  prompt(`${`Thanks for playing 21. See you next time!`.rainbow} ${emoji.get('wave')}`);
}

while (true) {
  let userScore = 0;
  let dealerScore = 0;

  while (true) {

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

    displayUserCards(userCards, userScore, dealerScore);
    displayCPUFirstCard(dealerCards);

    // Ask User Hit or Stay?
    while (true) {
      let userChoice = askHitOrStay();
      ifUserPicksHit(userChoice, userCards);
      userCount = addUserCount(userCards);
      displayUserCards(userCards, userScore, dealerScore);

      if (['2', 'stay'].includes(userChoice) || busted(userCount)) break;
    }

    if (busted(userCount)) {
      displayDealerCards(dealerCards);
      printUserGoesBust();
      displayCounts(userCount, dealerCount);
      dealerScore = addScore(dealerScore);
    } else {
      ifDealerPicksHit(dealerCount,dealerCards);
      dealerCount = addDealerCount(dealerCards);

      if (busted(dealerCount)) {
        displayDealerCards(dealerCards);
        printDealerGoesBust();
        displayCounts(userCount, dealerCount);
        userScore = addScore(userScore);
      }
    }

    if (!(busted(userCount) || busted(dealerCount))) {
      displayDealerCards(dealerCards);
      let winner = checkWinner(userCount, dealerCount);
      if (winner === 'user') {
        printUserWins();
        userScore = addScore(userScore);
      } else if (winner === 'dealer') {
        printDealerWins();
        dealerScore = addScore(userScore);
      } else {
        printTie();
      }
      displayCounts(userCount, dealerCount);
    }

    let grandWinner = checkGrandWinner(userScore, dealerScore);

    if (grandWinner === 'user') {
      printUserGrandWinner();
    } else if (grandWinner === 'dealer') {
      printDealerGrandWinner();
    }

    if (['user', 'dealer'].includes(grandWinner)) break;

    let resume = askForContinueGame();
    if (['n', 'no'].includes(resume)) break;
  }

  let restart = askForRestart();
  if (['n', 'no'].includes(restart)) break;

}
printThanksMessage();