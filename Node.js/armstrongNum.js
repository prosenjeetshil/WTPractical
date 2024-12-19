const prompt = require("prompt-sync")();
const num = parseInt(prompt("Enter a number: "));


function isArmstrongNumber(num) {
  let sum = 0;
  const digits = String(num).split(""); 
  const power = digits.length;

  for (const digit of digits) {
    sum += Math.pow(Number(digit), power); 
  }

  return sum === num; 
}


if (isArmstrongNumber(num)) {
  console.log(`${num} is an Armstrong number.`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}
