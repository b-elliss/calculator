let sum;
let firstNum; 
let operator; 
let secondNum;
let tempValue = '';
let display = document.querySelector('.display');
const equalButton = document.querySelector('#equal-button');
const clearButton = document.querySelector('#clear-button');
const deleteButton = document.querySelector('#delete-button');
const numberButtons = document.querySelectorAll('#number-button');
const operatorButtons = document.querySelectorAll('#operator-button');


numberButtons.forEach(button => 
    button.addEventListener('click', generalButtonFunc));

operatorButtons.forEach(button => 
    button.addEventListener('click', operatorButtonFunc));

equalButton.addEventListener('click', equalButtonFunc);

deleteButton.addEventListener('click', deleteButtonFunc);

clearButton.addEventListener('click', clear);


function operate() {
    if (operator == '+') {return +firstNum + +secondNum};
    if (operator == '-') {return +firstNum - +secondNum};
    if (operator == 'x' || operator == 'x') {return +firstNum * +secondNum};
    if (operator == '÷' || operator == '/') {return +firstNum / +secondNum};
};

function generalButtonFunc() {
    if (display.textContent == 'ERROR' || display.textContent == 'nope') {
        clear();
    };
    if (tempValue.includes('.') == true) {
        if (this.textContent == '.' == true) {
            tempValue = tempValue + this.textContent
            tempValue = tempValue.slice(0, -1);
        } else {
            tempValue = tempValue + this.textContent
        };
    } else {tempValue = tempValue + this.textContent}
    display.textContent = tempValue;
};

function operatorButtonFunc() {
    if (sum !== undefined) {
        firstNum = sum;
    } else if (firstNum === undefined) {
        firstNum = tempValue;
    } else {
        secondNum = tempValue;
        tempValue = '';
        if (operator == '/' && secondNum == 0) {
            return display.textContent = 'nope';
        } else {
            sum = Math.round((operate() + Number.EPSILON) * 100) / 100;
            firstNum = sum;
            secondNum = undefined;
        }
    };
    operator = this.textContent;
    tempValue = '';
};

function equalButtonFunc() {
    secondNum = tempValue;
    tempValue = '';
    if (firstNum == undefined || secondNum == '') {
        return display.textContent = 'ERROR';
    };
    if (operator == '/' && secondNum == 0) {
        return display.textContent = 'nope';
    } else {
        sum = Math.round((operate() + Number.EPSILON) * 100) / 100;
        secondNum = undefined;
    };
    display.textContent = sum;
};

function deleteButtonFunc() {
    if (display.textContent == tempValue) {
        tempValue = tempValue.slice(0, -1);
        display.textContent = tempValue
    };
    if (display.textContent == sum) {
        sum = +sum.toString().slice(0, -1);
        display.textContent = sum;
    };
    if (display.textContent == 'ERROR' || display.textContent == 'nope') {
        clear();
    }
};

function clear() {
    tempValue = '';
    firstNum = undefined; 
    operator = undefined; 
    secondNum = undefined;
    sum = undefined
    display.textContent = tempValue;
};



//Keyboard functionality

document.addEventListener('keydown',numKeyFunc);

document.addEventListener('keydown',operatorKeyFunc);

document.addEventListener('keydown',enterKeyFunc);

document.addEventListener('keydown',deleteKeyFunc);

document.addEventListener('keydown',escKeyFunc);

function numKeyFunc(e) {
    if (e.key >= 0 && e.key <= 9 || e.key == '.') {
        if (display.textContent == 'ERROR' || display.textContent == 'nope') {
            clear();
        };
        if (tempValue.includes('.') == true) {
            if (this.textContent == '.' == true) {
                tempValue = tempValue + e.key
                tempValue = tempValue.slice(0, -1);
            } else {
                tempValue = tempValue + e.key
            };
        } else {tempValue = tempValue + e.key}
        display.textContent = tempValue;
    }
};

function operatorKeyFunc(e) {
    if (e.key == '+' || e.key == '-' || e.key == '/' || e.key == '*') {
        if (sum !== undefined) {
            firstNum = sum;
        } else if (firstNum === undefined) {
            firstNum = tempValue;
        } else {
            secondNum = tempValue;
            tempValue = '';
            if (operator == '/' && secondNum == 0) {
                return display.textContent = 'nope';
            } else {
                sum = Math.round((operate() + Number.EPSILON) * 100) / 100;
                firstNum = sum;
                secondNum = undefined;
            }
        };
        operator = e.key;
        tempValue = '';
    }
};
function enterKeyFunc(e) {
    if (e.key == 'Enter') {equalButtonFunc()}
};

function deleteKeyFunc(e) {
    if (e.key == 'Backspace') {deleteButtonFunc()}
};

function escKeyFunc(e) {
    if (e.key == 'Escape') {clear()}
};