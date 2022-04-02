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

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}
//language definition edge cases
function defineLanguage() {
  if (['1', 'english', 'en'].includes(language)) {
    language = 'en';
  } else if (['2', 'french', 'fr'].includes(language)) {
    language = 'fr';
  }
}

function displayMessage(message, language) {
  return MESSAGES[language][message];
}

//Start of program
//User picks language
prompt('Choose your language\nPick 1) English or 2) French');
language = readline.question().toLowerCase();
defineLanguage();

//If language picked is not supported
while (!['1', 'english', 'en'].includes(language) && !['2', 'french', 'fr'].includes(language)) {
  prompt('Language not supported! Please choose between 1 and 2');
  language = readline.question().toLowerCase();
  defineLanguage();
}


//Welcome message
logInBox(displayMessage('welcome', language));

while (true) {
  //User enters first number
  prompt(displayMessage('firstNumber', language));
  let number1 = readline.question();
  //When wrong number is entered
  while (number1.trimStart() === '' || invalidNumber(number1)) {
    prompt(displayMessage('wrongNumber', language));
    number1 = readline.question();
  }
  //User enters second number
  prompt(displayMessage('secondNumber', language));
  let number2 = readline.question();
  //When wrong number is entered
  while (number2.trimStart() === '' || invalidNumber(number2)) {
    prompt(displayMessage('wrongNumber', language));
    number2 = readline.question();
  }

  //User enters desired operation
  prompt(displayMessage('operation', language));
  let operation = readline.question();
  //When wrong operation is entered
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(displayMessage('wrongOperation', language));
    operation = readline.question();
  }

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
      output = Number(number1) / Number(number2);
      break;
  }
  //Display result
  prompt(`${displayMessage('result', language)} ${output}`);
  //Ask if user wants a new calculation
  prompt(displayMessage('newCalculation', language));
  let answer = readline.question().toLowerCase();
  //Stop the program if user doesn't want new calculation
  if (!['y', 'yes'].includes(answer)) {
    prompt(displayMessage('exit', language));
    break;
  }
}
