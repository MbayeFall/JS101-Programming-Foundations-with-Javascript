const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
let language;
let number1;
let number2;
let operation;
let output;
let answer;

//Bannerizer from Easy 3 exercise JS101
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(`${horizontalRule}\n`);
}

function displayMessage(message, language) {
  return MESSAGES[language][message];
}

function welcomeMessage() {
  logInBox(displayMessage('welcome', language));
}

function prompt(message) {
  console.log(`=> ${message}`);
}


function invalidNumber(number) {
  return Number.isNaN(Number(number));
}
//language definition edge cases
function getLanguage() {
  prompt('Choose your language\nPick 1) English or 2) French');
  language = readline.question().toLowerCase();
  if (['1', 'english', 'en'].includes(language)) {
    language = 'en';
  } else if (['2', 'french', 'fr'].includes(language)) {
    language = 'fr';
  }

  //If language picked is not supported
  while (!['1', 'english', 'en'].includes(language) && !['2', 'french', 'fr'].includes(language)) {
    prompt('Language not supported! Please choose between 1 and 2');
    language = readline.question().toLowerCase();
    if (['1', 'english', 'en'].includes(language)) {
      language = 'en';
    } else if (['2', 'french', 'fr'].includes(language)) {
      language = 'fr';
    }
  }
}

function getFirstNumber() {
  //User enters first number
  prompt(displayMessage('firstNumber', language));
  number1 = readline.question();
  //When wrong number is entered
  while (number1.trimStart() === '' || invalidNumber(number1)) {
    prompt(displayMessage('wrongNumber', language));
    number1 = readline.question();
  }
}

function getSecondNumber() {
  //User enters second number
  prompt(displayMessage('secondNumber', language));
  number2 = readline.question();
  //When wrong number is entered
  while (number2.trimStart() === '' || invalidNumber(number2)) {
    prompt(displayMessage('wrongNumber', language));
    number2 = readline.question();
  }
}

function getOperation() {
  //User enters desired operation
  prompt(displayMessage('operation', language));
  operation = readline.question();
  //When wrong operation is entered
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(displayMessage('wrongOperation', language));
    operation = readline.question();
  }
}

function performCalculation() {
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      if (Number(number2) === 0) {
        prompt(displayMessage('division0', language));
      } else {
        output = Number(number1) / Number(number2);
        break;
      }
  }
}

function displayResult() {
  if (!(Number(operation) === 4 && Number(number2) === 0)) {
    prompt(`${displayMessage('result', language)} ${output}`);
  }
}

function askNewCalculation() {
  //Ask if user wants a new calculation
  prompt(displayMessage('newCalculation', language));
  answer = readline.question().toLowerCase();
}

//Start of program

getLanguage();
welcomeMessage();

while (true) {
  getFirstNumber();
  getSecondNumber();
  getOperation();
  performCalculation();
  displayResult();
  askNewCalculation();
  //Stop the program if user doesn't want new calculation
  if (!['y', 'yes'].includes(answer)) {
    prompt(displayMessage('exit', language));
    break;
  }
  console.clear();
}
