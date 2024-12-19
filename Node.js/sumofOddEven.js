const EventEmitter = require("events");

class OddEven extends EventEmitter {
  calculate(arr) {
    let oddSum = 0;
    let evenSum = 0;
    // Loop through the entire array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenSum += arr[i]; // Add to even sum
      } else {
        oddSum += arr[i]; // Add to odd sum
      }
    }
    // Emit the 'calculate' event with results
    this.emit("calculate", oddSum, evenSum);
  }
}

// Create an instance of the OddEven class
const oddevenInstance = new OddEven();

// Set up the 'calculate' event listener
oddevenInstance.on("calculate", (oddSum, evenSum) => {
  console.log(`The sum of odd numbers is: ${oddSum}`);
  console.log(`The sum of even numbers is: ${evenSum}`);
});

// Call the calculate method with a sample array
oddevenInstance.calculate([2, 3, 4, 5]);
