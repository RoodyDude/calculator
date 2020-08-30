const clear = document.querySelector("#clearButton");
const square = document.querySelector("#squareButton");
const squareRoot = document.querySelector("#squareRootButton");
const plusButton = document.querySelector("#buttonPlus");
const minusButton = document.querySelector("#buttonMinus");
const timesButton = document.querySelector("#buttonTimes");
const divButton = document.querySelector('#buttonDivide');
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const button0 = document.querySelector("#button0");
const mathButtons = document.querySelector('.buttons');
const numButtons = document.querySelector('.numberButtons');
const negativeButton = document.querySelector("#buttonNegative");
const dotButton = document.querySelector("#buttonDot");
const equalsButton = document.querySelector("#buttonEquals");
const displayResult = document.querySelector(".resultDisplay");
displayResult.textContent = '';
let currentOperand = '';
let num1;
let num2;
let result;
let isFirstNum = true;
let negativeCheck = false;
let isDotAlready = false;



button1.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "1";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "1";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "1";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "1";
            }
        }
    }
});
button2.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "2";
            }  
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "2";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "2";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "2";
            }
        }
    }
});
button3.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "3";
            }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "3";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "3";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "3";
            }
        }
    }
});
button4.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "4";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "4";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "4";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "4";
            }
        }
    }
});
button5.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "5";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "5";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "5";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "5";
            }
        }
    }
});
button6.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "6";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "6";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "6";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "6";
            }
        }
    }
});
button7.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "7";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "7";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "7";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "7";
            }
        }
    }
});
button8.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "8";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "8";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "8";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "8";
            }
        }
    }
});
button9.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "9";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "9";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "9";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "9";
            }
        }
    }
});
button0.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isFirstNum) {
            displayResult.textContent += "0";
        }
        else {
            isFirstNum = true;
            displayResult.textContent = '';
            displayResult.textContent += "0";
        }
    }
    else {
        if (currentOperand) {
            if (isFirstNum) {
                displayResult.textContent += "0";
            }
            else {
                isFirstNum = true;
                displayResult.textContent = '';
                displayResult.textContent += "0";
            }
        }
    }
});
dotButton.addEventListener('click', () => {
    if (displayResult.textContent.length < 8) {
        if (isDotAlready == false) {
            displayResult.textContent += ".";
            isDotAlready = true;
        }
        else{}
    }
});
clear.addEventListener('click', () => {
    displayResult.textContent = "";
    num1 = '';
    num2 = '';
    currentOperand = '';
    negativeCheck = false;
    isDotAlready = false;
});
plusButton.addEventListener('click', () => {
    if (num1 && currentOperand) {
        calculate();
    }
    num1 = displayResult.textContent;
    currentOperand = "+";
    isFirstNum = false;
    if (isDotAlready) {
        isDotAlready = false;
    }
});
minusButton.addEventListener('click', () => {
    if (num1 && currentOperand) {
        calculate();
    }
    num1 = displayResult.textContent;
    currentOperand = "-";
    isFirstNum = false;
    if (isDotAlready) {
        isDotAlready = false;
    }
});
timesButton.addEventListener('click', () => {
    if (num1 && currentOperand) {
        calculate();
    }
    num1 = displayResult.textContent;
    currentOperand = "*";
    isFirstNum = false;
    if (isDotAlready) {
        isDotAlready = false;
    }
});
divButton.addEventListener('click', () => {
    if (num1 && currentOperand) {
        calculate();
    }
    num1 = displayResult.textContent;
    currentOperand = "/";
    isFirstNum = false;
    if (isDotAlready) {
        isDotAlready = false;
    }
});

equalsButton.addEventListener('click', calculate);

square.addEventListener('click', () => {
    displayResult.textContent = displayResult.textContent * displayResult.textContent;
    if (displayResult.textContent.length > 8) {
        displayResult.textContent = "Error"
    }
});

squareRoot.addEventListener('click', () => {
    displayResult.textContent = Number(Math.sqrt(displayResult.textContent).toPrecision(7));
});

negativeButton.addEventListener('click', () => {
    if (negativeCheck == false) {
        displayResult.textContent = "-" + displayResult.textContent;
        negativeCheck = true;
    }
    else {
        displayResult.textContent = displayResult.textContent.substring(1);
        negativeCheck = false;
    }
});

function calculate() {
    num2 = displayResult.textContent;
    if (currentOperand == "+") {
        result = Number(num1) + Number(num2);
        displayResult.textContent = Number(result.toFixed(7));
        }
    if (currentOperand == "-") {
        result = Number(num1) - Number(num2);
        displayResult.textContent = Number(result.toFixed(7));
        }
    if (currentOperand == "*") {
        result = Number(num1) * Number(num2);
        displayResult.textContent = Number(result.toFixed(7));
        }
    if (currentOperand == "/") {
        if (num2 == "0") {
            displayResult.textContent = "nice";
        }
        else {
            result = Number(num1) / Number(num2);
            displayResult.textContent = Number(result.toPrecision(7));
            }
        }
    if (displayResult.textContent < 0) {
        negativeCheck = true;
    }
    if (displayResult.textContent.length > 8) {
        displayResult.textContent = "Error"
    }
    currentOperand = '';
}