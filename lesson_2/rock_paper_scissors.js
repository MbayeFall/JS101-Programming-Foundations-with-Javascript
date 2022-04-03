const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const prompt = message => {
  console.log(`=> ${message}`);
};
const displayWinner = (userChoice, computerChoice) => {
  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You won !');
  } else if (((userChoice === 'scissors' && computerChoice === 'rock') ||
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors'))) {
    prompt('Computer won !');
  } else {
    prompt("It's a tie !");
  }
};

while (true) {
  prompt(`Please choose: ${VALID_CHOICES.join(', ')}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("That's not a valid choice. Please try again !");
    userChoice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose: ${userChoice}, computer chose ${computerChoice}`);

  displayWinner(userChoice, computerChoice);

  prompt('Do you want to play again ? (y/n)');
  let restart = readline.question().toLowerCase();

  while (restart[0] !== 'n' && restart[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    restart = readline.question().toLowerCase();
  }

  if (restart[0] === 'n') break;
}