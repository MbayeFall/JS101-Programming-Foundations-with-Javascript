const MESSAGES = require('./calculator_messages.json');
const readline = require('readline-sync');
let language;

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

function getNumber(message) {
  //User enters first number
  prompt(displayMessage(message, language));
  let number = readline.question();
  //When wrong number is entered
  while (number.trimStart() === '' || invalidNumber(number)) {
    prompt(displayMessage('wrongNumber', language));
    number = readline.question();
  }
  return number;
}

function getOperation() {
  //User enters desired operation
  prompt(displayMessage('operation', language));
  let operation = readline.question();
  //When wrong operation is entered
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(displayMessage('wrongOperation', language));
    operation = readline.question();
  }
  return operation;
}

function performCalculation(operation, number1, number2) {
  let output;
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
      Number(number2) === 0 ? prompt(displayMessage('division0', language)) : output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

function displayResult(output, operation, number2) {
  if (!(Number(operation) === 4 && Number(number2) === 0)) {
    prompt(`${displayMessage('result', language)} ${output}`);
  }
}

function askNewCalculation() {
  //Ask if user wants a new calculation
  prompt(displayMessage('newCalculation', language));
  return readline.question().toLowerCase();
}

//Start of program

getLanguage();
welcomeMessage();

while (true) {
  let number1 = getNumber('firstNumber');
  let number2 = getNumber('secondNumber');
  let operation = getOperation();
  let output = performCalculation(operation, number1, number2);
  displayResult(output, operation, number2);
  let restart = askNewCalculation();
  //Stop the program if user doesn't want new calculation
  if (!['y', 'yes'].includes(restart)) {
    prompt(displayMessage('exit', language));
    break;
  }
  console.clear();
}