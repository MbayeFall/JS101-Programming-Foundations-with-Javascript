const readline = require('readline-sync');

let userScore = 0;
let computerScore = 0;

const prompt = message => {
  console.log(`=> ${message}`);
};

const validateS = () => {
  prompt('Do you mean 1) scissors or 2) spock');
  let choice = readline.question();
  while (!['1', '2', 'scissors', 'spock'].includes(choice)) {
    prompt("Please choose 1 or 2 !");
    choice = readline.question();
  }
  if (['1', 'scissors'].includes(choice)) {
    return 'scissors';
  } else if (['2', 'spock'].includes(choice)) {
    return 'spock';
  }
  return undefined;
};

const checkFirstLetter = (letter) => {
  switch (letter) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'l':
      return 'lizard';
    case 's':
      return validateS();
  }
  return undefined;
};

const getUserChoice = (VALID_CHOICES) => {
  prompt(`Please choose: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();
  if (['r', 'p', 'l', 's'].includes(userChoice)) {
    return checkFirstLetter(userChoice);
  }

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Please try again !");
    userChoice = readline.question();
    if (['r', 'p', 'l', 's'].includes(userChoice)) {
      return checkFirstLetter(userChoice);
    }
  }
  return userChoice;
};
const getComputerChoice = (VALID_CHOICES) => {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
};

const checkUserWins = (userChoice, computerChoice) => {
  return  ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'rock' && computerChoice === 'lizard') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'paper' && computerChoice === 'spock') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'scissors' && computerChoice === 'lizard') ||
    (userChoice === 'lizard' && computerChoice === 'paper') ||
    (userChoice === 'lizard' && computerChoice === 'spock') ||
    (userChoice === 'spock' && computerChoice === 'scissors') ||
    (userChoice === 'spock' && computerChoice === 'rock'));
};

const displayChoices = (userChoice, computerChoice) => {
  prompt(`You chose: ${userChoice}, computer chose ${computerChoice}`);
};

const displayWinner = (userChoice, computerChoice) => {
  if (checkUserWins(userChoice, computerChoice)) {
    prompt('You won this round !');
  } else if (userChoice === computerChoice) {
    prompt('It\'s a tie !');
  } else {
    prompt("CPU won this round !");
  }
};

const addScore = (userChoice, computerChoice) => {
  if (checkUserWins(userChoice, computerChoice)) {
    userScore++;
  } else if (!checkUserWins(userChoice, computerChoice) &&
   userChoice !== computerChoice) {
    computerScore++;
  }
};

const displayScore = () => {
  if (userScore < 3 && computerScore < 3) {
    if (userScore > computerScore) {
      prompt(`You're leading.\n Your Score: ${userScore}\n CPU Score: ${computerScore}.`);
    } else if (userScore < computerScore) {
      prompt(`Computer is leading.\n Your Score: ${userScore}\n CPU Score: ${computerScore}.`);
    } else {
      prompt(`The score is tied.\n Score: ${userScore}.`);
    }
  }
};

const checkGrandWinner = () => {
  if (userScore === 3) {
    prompt('You are the GRAND WINNER ! Congrats !');
  } else if (computerScore === 3) {
    prompt('The Computer is the GRAND WINNER ! Better luck next time !');

  }
};

const resetScore = () => {
  if (userScore === 3 || computerScore === 3) {
    userScore = 0;
    computerScore = 0;
  }
};

const requestRestart = () => {
  prompt('Do you want to play again ? (y/n)');
  let restart = readline.question().toLowerCase();
  while (restart[0] !== 'n' && restart[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    restart = readline.question().toLowerCase();
  }
  return restart;
};


while (true) {
  const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  let userChoice =  getUserChoice(VALID_CHOICES);

  let computerChoice = getComputerChoice(VALID_CHOICES);

  displayChoices(userChoice, computerChoice);

  displayWinner(userChoice, computerChoice);

  addScore(userChoice, computerChoice);

  displayScore();

  checkGrandWinner();

  resetScore();

  let restart = requestRestart();

  if (restart[0] === 'n') break;
  console.clear();
}