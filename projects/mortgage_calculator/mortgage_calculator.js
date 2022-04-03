// ask for the loan amount
// ask for APR
// ask for loan duration in Years
// calculate the monthly interest rate
// calculate the loan duration in months
// Use formula to calculate the monthly payment
// print the monthly payment with 2 decimals

const readlineSync = require("readline-sync");


function prompt(msg) {
  console.log(`==> ${msg}`);
}
function printWelcome() {
  prompt("Welcome to the Car Loan Calculator !");
}
function invalidNumber(number) {
  return Number.isNaN(Number(number));
}
function getLoanAmount() {
  //Ask for the loan amount
  prompt("What is the loan amount ?");
  let loanAmount = readlineSync.question('$');
  // When wrong number is entered
  while (!loanAmount.trimStart('') || invalidNumber(loanAmount)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    loanAmount = readlineSync.question();
  }
  return loanAmount;
}
function getInterestRate() {
  // Ask for the interest rate
  prompt("What is the annual percentage rate (APR) ?\nEx: Enter \"15\" for 15% ");
  let annualInterestRate = readlineSync.question();
  // When wrong number is entered
  while (!annualInterestRate.trimStart('') || invalidNumber(annualInterestRate)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    annualInterestRate = readlineSync.question();
  }
  annualInterestRate /= 100;
  return annualInterestRate;
}
function getLoanDuration() {
  // Ask for loan duration
  prompt("What is the loan duration (in Years) ?");
  let loanDurationInYears = readlineSync.question();
  // When wrong number is entered
  while (!loanDurationInYears.trimStart('') || invalidNumber(loanDurationInYears)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    loanDurationInYears = readlineSync.question();
  }
  return loanDurationInYears;
}
function performCalculation(loanAmount,
  monthlyInterestRate, loanDurationInMonths) {
  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 -
  Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));
  return monthlyPayment;
}
function printPaymentAmount(monthlyPayment) {
  prompt(`The monthly payment amount is $${monthlyPayment.toFixed(2)}`);
}
function askNewCalculation() {
  prompt("Would you like to perform a new calculation ?\nEnter \"y\" to continue\nEnter anything else to exit");
  return readlineSync.question().toLowerCase();
}


// START OF PROGRAM
printWelcome();
while (true) {
  let loanAmount = getLoanAmount();
  let annualInterestRate = getInterestRate();
  let loanDurationInYears = getLoanDuration();
  let monthlyInterestRate = annualInterestRate / 12;
  let loanDurationInMonths = loanDurationInYears * 12;
  let monthlyPayment = performCalculation(loanAmount,
    monthlyInterestRate, loanDurationInMonths);
  printPaymentAmount(monthlyPayment);
  let restart = askNewCalculation();
  if (!["y", "yes"].includes(restart)) break;
  console.clear();
}
prompt('exiting...');