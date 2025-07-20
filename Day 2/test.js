let num1, num2, operator, result;

// Function to update the display
function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

// Append clicked value to the display
function appendToScreen(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear the display
function clearScreen() {
    document.getElementById('display').innerText = '0';
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display').innerText;
    
    // Extract the numbers and operator from the screen text
    let input = display.split(/([+\-*/**])/);
    num1 = parseFloat(input[0]);
    operator = input[1];
    num2 = parseFloat(input[2]);

    // 10% chance of faulty calculation
    if (Math.random() < 0.1) {
        if (operator === "+") {
            result = num1 - num2; // Faulty behavior
        } else if (operator === "-") {
            result = num1 / num2; // Faulty behavior
        } else if (operator === "*") {
            result = num1 + num2; // Faulty behavior
        } else if (operator === "/") {
            result = num1 ** num2; // Faulty behavior (Exponentiation instead of division)
        } else {
            result = "Invalid operator!";
        }
    } else {
        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "**") {
            result = num1 ** num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                result = "Error: Division by zero!";
            } else {
                result = num1 / num2;
            }
        } else {
            result = "Invalid operator!";
        }
    }

    updateDisplay(result);
}
