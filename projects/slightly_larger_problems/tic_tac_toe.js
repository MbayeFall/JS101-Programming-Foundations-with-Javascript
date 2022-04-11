const readline = require('readline-sync');
const emoji = require('node-emoji');
const colors = require('colors');


const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X'.blue;
const COMPUTER_MARKER = 'O'.red;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7], //diagonals
];

function displayWelcomeMessage() {
  console.clear();
  console.log('Welcome to TIC-TAC-TOE!\n'.rainbow);
}

function displayScore(playerScore, computerScore) {
  console.log(`${`Player Score: ${playerScore}`.blue} ${`CPU Score: ${computerScore}`.red}`);
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |\n');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === '1') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (['1', 'player'].includes(currentPlayer)) {
    return '2';
  } else return '1';
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function displayWinner(board) {
  if (detectWinner(board) === 'Computer') {
    prompt(`${detectWinner(board)} won! ${emoji.get('robot_face')}`.red);
  } else if (detectWinner(board) === 'Player') {
    prompt(`${detectWinner(board)} won! ${emoji.get('trophy')}`.blue);
  }
}

function addPlayerScore(playerScore, board) {
  if (detectWinner(board) === 'Player') {
    return playerScore + 1;
  } else {
    return playerScore;
  }
}

function addComputerScore(computerScore, board) {
  if (detectWinner(board) === 'Computer') {
    return computerScore + 1;
  } else {
    return computerScore;
  }
}


function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function checkGrandWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    return 'Player';
  } else if (computerScore === 5) {
    return 'Computer';
  }
  return null;
}

function displayGrandWinner (winner) {
  if (winner === 'Player') {
    prompt(`Congratulations!${emoji.get('tada')} You are the Grand Winner! ${emoji.get('clap')}`);
  } else if (winner === 'Computer') {
    prompt(`The Computer is the Grand Winner! Better luck next time ${emoji.get('sweat_smile')}`);
  }
}

function joinOr(arr, separator = ', ', joinWord = 'or') {
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

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, That's not a valid choice.");
  }
  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    square = findSquareAtRisk(WINNING_LINES[index], board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {

      square = findSquareAtRisk(WINNING_LINES[index], board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (board[5] === INITIAL_MARKER) square = 5;


  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function findSquareAtRisk(line, board, marker) {
  let lineByMarkers = line.map(square => board[square]);

  if (lineByMarkers.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    return unusedSquare;
  }
  return null;
}


function displayThanksMessage() {
  prompt('Thanks for playing Tic Tac Toe!'.rainbow);
}


displayWelcomeMessage();
//ASK QUESTIONS
while (true) {
  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    prompt(`${'Pick first player?'.inverse}\n${'1) Player'.blue} ${'2) Computer'.red}`);
    let currentPlayer = readline.question().toLowerCase().trim();

    while (!['1', '2', 'player', 'computer'].includes(currentPlayer)) {
      prompt('Please choose 1 or 2!');
      currentPlayer = readline.question().toLowerCase().trim();
    }

    let board = initializeBoard();

    //GAME BEGINS
    while (true) {

      displayBoard(board);
      displayScore(playerScore, computerScore);
      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      displayWinner(board);
      playerScore = addPlayerScore(playerScore, board);
      computerScore = addComputerScore(computerScore, board);
    } else {
      prompt("It's a tie!");
    }
    displayScore(playerScore, computerScore);

    let winner = checkGrandWinner(playerScore, computerScore);

    displayGrandWinner(winner);

    if (winner) break;
    //CONTINUE?
    prompt('Continue? (y/n)');
    let continueGame = readline.question().toLowerCase();

    while (!['y', 'yes', 'n', 'no'].includes(continueGame)) {
      prompt('Please pick y or n');
      continueGame = readline.question().toLowerCase();
    }
    if (['n', 'no'].includes(continueGame)) break;
  }
  // PLAY AGAIN?
  prompt('Restart Game? (y/n)');
  let restart = readline.question().toLowerCase().trim();

  while (!['y', 'n', 'yes', 'no'].includes(restart)) {
    prompt('Please enter y or n');
    restart = readline.question().toLowerCase().trim();
  }

  if (!['yes', 'y'].includes(restart)) break;
}

displayThanksMessage();