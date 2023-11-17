let tempDispValue = '';
let firstNum; 
let operator; 
let secondNum;
let display = document.querySelector('.display');

const numberButtons = document.querySelectorAll('#number-button');
const operatorButtons = document.querySelectorAll('#operator-button');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');


numberButtons.forEach(button => 
    button.addEventListener('click', function() {
        tempDispValue = tempDispValue + this.textContent;
        display.textContent = tempDispValue;
    }));

operatorButtons.forEach(button => 
    button.addEventListener('click', function() {
        if (firstNum === undefined) {
            firstNum = tempDispValue
        } else {
            secondNum = tempDispValue;
            if (operator == '/' && secondNum == 0) {
                tempDispValue = 'nope';
                return display.textContent = tempDispValue;}
            else {firstNum = Math.round((operate() + Number.EPSILON) * 100) / 100};
        };
        operator = this.textContent;
        tempDispValue = '';
        }));

equalButton.addEventListener('click', function() {
    secondNum = tempDispValue;
    if (operator == '/' && secondNum == 0) {tempDispValue = 'nope'}
    else {tempDispValue = Math.round((operate() + Number.EPSILON) * 100) / 100};
    display.textContent = tempDispValue;
});

clearButton.addEventListener('click', function() {
    tempDispValue = '';
    display.textContent = tempDispValue;
    firstNum = undefined; 
    operator = undefined; 
    secondNum = undefined;
});

function operate() {
    if (operator == '+') {return +firstNum + +secondNum};
    if (operator == '-') {return +firstNum - +secondNum};
    if (operator == '*') {return +firstNum * +secondNum};
    if (operator == '/') {return +firstNum / +secondNum};
};