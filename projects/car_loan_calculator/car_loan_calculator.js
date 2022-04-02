// ask for the loan amount 
// ask for APR 
// ask for loan duration

// calculate monthly interest rate 
// calculate loan duration in months

const readlineSync = require("readline-sync");
let loanAmount;
let apr;
let loanDuration;

function prompt(msg) {
  console.log(`==> ${msg}`);
}
function invalidNumber(number) {
  return Number.isNaN(Number(number));
}
function getLoanAmount() {
  prompt("What is the loan amount ?");
  loanAmount = readlineSync.question();
}
function getApr() {
  prompt("What is the annual percentage rate (APR) ?\nEx: Enter \"15\" if 15% ");
  apr = readlineSync.question();
}
function getLoanDuration() {
  prompt("What is the loan duration ?")
  loanDuration = readlineSync.question();
}

//Ask for the loan amount 
getLoanAmount();
while (!loanAmount.trimStart('') || invalidNumber(loanAmount)) {
  prompt("Hmm... That seems like an invalid number")
  getLoanAmount();
}

//Ask for Annual Percentage Rate
getApr();
while (!apr.trimStart('') || invalidNumber(apr)) {
  prompt("Hmm... That seems like an invalid number")
  getApr();
}

//Ask for loan duration
getLoanDuration();
while (!loanDuration.trimStart('') || invalidNumber(loanDuration)) {
  prompt("Hmm... That seems like an invalid number")
  getLoanDuration();
}