// ask for the loan amount
// ask for APR
// ask for loan duration in Years
// calculate the monthly interest rate
// calculate the loan duration in months
// Use formula to calculate the monthly payment
// print the monthly payment with 2 decimals

const readlineSync = require("readline-sync");
let loanAmount;
let annualInterestRate;
let LoanDurationInYears;
let restart;
let monthlyInterestRate;
let LoanDurationInMonths;
let monthlyPayment;

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
  loanAmount = readlineSync.question('$');
  // When wrong number is entered
  while (!loanAmount.trimStart('') || invalidNumber(loanAmount)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    loanAmount = readlineSync.question();
  }
}
function getInterestRate() {
  // Ask for the interest rate
  prompt("What is the annual percentage rate (APR) ?\nEx: Enter \"15\" for 15% ");
  annualInterestRate = readlineSync.question();
  // When wrong number is entered
  while (!annualInterestRate.trimStart('') || invalidNumber(annualInterestRate)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    annualInterestRate = readlineSync.question();
  }
  annualInterestRate /= 100;
}
function getLoanDuration() {
  // Ask for loan duration
  prompt("What is the loan duration (in Years) ?");
  LoanDurationInYears = readlineSync.question();
  // When wrong number is entered
  while (!LoanDurationInYears.trimStart('') || invalidNumber(LoanDurationInYears)) {
    prompt("Hmm... That seems like an invalid number, please try again !");
    LoanDurationInYears = readlineSync.question();
  }
}
function performCalculation() {
  monthlyInterestRate = annualInterestRate / 12;
  LoanDurationInMonths = LoanDurationInYears * 12;
  monthlyPayment = loanAmount * (monthlyInterestRate / (1 -
  Math.pow((1 + monthlyInterestRate), (-LoanDurationInMonths))))
}
function printPaymentAmount() {
  prompt(`The monthly payment amount is $${monthlyPayment.toFixed(2)}`);
}
function askNewCalculation() {
  prompt("Would you like to perform a new calculation ?\nEnter \"y\" to continue\nEnter anything else to exit");
  restart = readlineSync.question().toLowerCase();
}


// START OF PROGRAM
printWelcome();
while (true) {
  getLoanAmount();
  getInterestRate();
  getLoanDuration();
  performCalculation();
  printPaymentAmount();
  askNewCalculation();
  if (!["y", "yes"].includes(restart)) break;
  console.clear();
}
prompt('exiting...');