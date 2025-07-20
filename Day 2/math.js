const prompt = require('prompt-sync')(); // Use prompt-sync for synchronous input

let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /, **): ");
let num2 = parseFloat(prompt("Enter second number: "));

let result;

if (Math.random() < 0.1) { // 10% chance of faulty calculation
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

console.log("Result: " + result);
