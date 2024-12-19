// Addition
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

// Subtraction
function subtract(a, b, callback) {
  const result = a - b;
  callback(result);
}

// Multiplication
function multiply(a, b, callback) {
  const result = a * b;
  callback(result);
}

// Division
function divide(a, b, callback) {
  if (b !== 0) {
    const result = a / b;
    callback(result);
  } else {
    callback("Error: Division by zero");
  }
}

// Callback function to display results
function displayResult(result) {
  console.log("Result:", result);
}

// Demonstrating arithmetic operations with callbacks
console.log("Arithmetic Operations using Callback Functions in Node.js:");

add(10, 5, displayResult); // 10 + 5 = 15
subtract(10, 5, displayResult); // 10 - 5 = 5
multiply(10, 5, displayResult); // 10 * 5 = 50
divide(10, 5, displayResult); // 10 / 5 = 2
divide(10, 0, displayResult); // Error: Division by zero
