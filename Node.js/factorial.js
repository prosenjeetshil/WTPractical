const factorial = (num) => {
  if (num < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  }

  // if number is 0
  else if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
  }

  // if number is positive
  else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
  }
};
factorial(7);
