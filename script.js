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
    button.addEventListener('click', function() {
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
    }));

deleteButton.addEventListener('click', function() {
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
    };
});

operatorButtons.forEach(button => 
    button.addEventListener('click', function() {
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
        }));

equalButton.addEventListener('click', function() {
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
    console.log(tempValue);
    console.log(firstNum);
    console.log(operator);
    console.log(secondNum);
    console.log(sum)

});

clearButton.addEventListener('click', clear);

function clear() {
    tempValue = '';
    firstNum = undefined; 
    operator = undefined; 
    secondNum = undefined;
    sum = undefined
    display.textContent = tempValue;
};

function operate() {
    if (operator == '+') {return +firstNum + +secondNum};
    if (operator == '-') {return +firstNum - +secondNum};
    if (operator == '*') {return +firstNum * +secondNum};
    if (operator == '/') {return +firstNum / +secondNum};
};