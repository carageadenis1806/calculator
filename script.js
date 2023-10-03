// 1. CREATING THE BASIC FUNCTIONS

function add(a,b) {
    let sum = a + b;
    return sum;
}

function substract(a,b) {
    let subs = a - b;
    return subs;
}

function multiply(a,b) {
    let multpl = a * b;
    return multpl;
}

function divide(a,b) {
    let divide = a / b;
    return divide;
}




// 2. CREATING VARIABLES FOR THE 2 NUMBERS AND OPERATOR

let firstNumber = 0;
let secondNumber = 0;
let operator;




// 3. CREATE THE OPERATE FUNCTION THAT TAKES THE 2 NUMBERS AND THE OPERATOR AND CALLS ONE OF THE BASIC FUNCTIONS

function operate(firstNumber,secondNumber,operator) {

        if(operator == '-') {
           let result = substract(firstNumber,secondNumber);
           return result;
        }else if(operator == '+'){
            let result = add(firstNumber,secondNumber);
            return result;
        }else if(operator == '/'){
           let result = divide(firstNumber,secondNumber);
           return result;
        }else if(operator == '*'){
           let result = multiply(firstNumber,secondNumber);
           return result;
        };
}

// 5. CREATE THE FUNCTIONS THAT POPULATES THE DISPLAY SCREEN

    // SELECTING THE BUTTONS WITH DOM

    const calculatorDisplay = document.querySelector('.calculator-display');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalsButton = document.querySelector('.equals');
    const clearButton = document.querySelector('.clear');


let storedNumber = '';
let storedFirstNumber = '';
let clickedOperator = '';
let result = '';


    // Populate the display with numbers
numberButtons.forEach((number) => {
    number.addEventListener('click', () => {
        let displayNumber = document.createElement('p');

        //storing the number
        storedNumber += number.value;
        displayNumber.textContent = number.value;
        calculatorDisplay.appendChild(displayNumber);
    });
});

    // Populate the screen with operators

operatorButtons.forEach((operator) => {
        operator.addEventListener('click', () => {

            //saving the first number
            storedFirstNumber = storedNumber;

            clickedOperator = operator.value;
            let displayOperator = document.createElement('p');
            displayOperator.textContent = operator.value;
            calculatorDisplay.appendChild(displayOperator);
            console.log(clickedOperator);

            //emptying the storenumber variable so the second one has space
            storedNumber = '';
        });
    });


// 6. Make the calculator work

function displayResult() {
    let resultDisplay = document.createElement('p');
    result = operate(parseFloat(storedFirstNumber), parseFloat(storedNumber),clickedOperator);
    resultDisplay.textContent = result;
    calculatorDisplay.appendChild(resultDisplay);

}

// clear function
function clearDisplay() {
    calculatorDisplay.textContent = ' ';
    result = '';
    storedFirstNumber = '';
    storedNumber = '';
    clickedOperator = '';
}



equalsButton.addEventListener('click', () => {
    calculatorDisplay.textContent = ' ';
    displayResult();
});

clearButton.addEventListener('click', () => {
    clearDisplay();
});





 
    

