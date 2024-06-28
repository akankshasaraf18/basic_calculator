let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clearDisplay();
        } else if (button.id === 'equals') {
            calculateResult();
        } else if (button.id === 'decimal') {
            addDecimal();
        } else if (button.id === 'add' || button.id === 'subtract' || button.id === 'multiply' || button.id === 'divide') {
            setOperator(button.id);
        } else {
            addNumber(button.id);
        }
    });
});

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}

function addNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function addDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function setOperator(op) {
    if (currentNumber === '') return;
    previousNumber = currentNumber;
    currentNumber = '';
    operator = op;
    display.value = previousNumber + ' ' + getOperatorSymbol(op);
}

function getOperatorSymbol(op) {
    switch (op) {
        case 'add':
            return '+';
        case 'subtract':
            return '-';
        case 'multiply':
            return '*';
        case 'divide':
            return '/';
    }
}

function calculateResult() {
    if (currentNumber === '' || previousNumber === '') return;
    let result = 0;
    switch (operator) {
        case 'add':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case 'subtract':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case 'multiply':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case 'divide':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
    }
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}
