let tempDispValue = '';
let firstNum = []; //assign this value whenever the operator is clicked
let operator = []; //assign this value whenever the operator is clicked
let secondNum = [];//assign this value whenever the equal sign is clicked
const numberButtons = document.querySelectorAll('#number-button');
const operatorButtons = document.querySelectorAll('#operator-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');

numberButtons.forEach(button => 
    button.addEventListener('click', function() {
        tempDispValue = tempDispValue + this.textContent;
        document.querySelector('.display').textContent = tempDispValue;
    }));

operatorButtons.forEach(button => 
    button.addEventListener('click', function() {
        firstNum = tempDispValue;
        operator = this.textContent;
        tempDispValue = '';
        document.querySelector('.display').textContent = tempDispValue;
        }));

equalButton.addEventListener('click', function() {
    secondNum = tempDispValue;
    tempDispValue = operate();
    document.querySelector('.display').textContent = tempDispValue;
});

clearButton.addEventListener('click', function() {
    tempDispValue = '';
    document.querySelector('.display').textContent = tempDispValue;
    firstNum = []; 
    operator = []; 
    secondNum = [];
});

function operate() {
    if (operator == '+') {return +firstNum + +secondNum;}
    if (operator == '-') {return +firstNum - +secondNum;}
    if (operator == '*') {return +firstNum * +secondNum;}
    if (operator == '/') {return +firstNum / +secondNum;}
};