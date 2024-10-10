let readlineSync = require('readline-sync');

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero.");
        return null;
    }
    return a / b;
}

function getValidNumber(promptText) {
    let num;
    while (true) {
        let input = readlineSync.question(promptText);
        num = parseFloat(input);
        
        // Check for valid number and ensure input is not NaN or Infinity
        if (!isNaN(num) && isFinite(num)) {
            return num;
        }
        
        console.log("Invalid number. Please try again.");
    }
}

function getValidOperator() {
    let operator;
    const validOperators = ["+", "-", "*", "/"];
    while (true) {
        operator = readlineSync.question('Enter an Operator (+, -, *, /): ');
        if (validOperators.includes(operator)) {
            return operator;
        }
        console.log("Invalid operator. Please use one of +, -, *, /.");
    }
}

function calculator() {
    let firstNumber = getValidNumber('Enter First Number: ');
    let operator = getValidOperator();
    let secondNumber = getValidNumber('Enter Second Number: ');

    let result;
    switch (operator) {
        case "+":
            result = sum(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }

    if (result !== null) {
        console.log("Result:", result);
    } else {
        console.log("Operation could not be completed due to invalid input.");
    }
}

calculator();
