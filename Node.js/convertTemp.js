const prompt = require("prompt-sync")();

function celsiustofarenheit(celsius) {
  let farenheit = (celsius * 9) / 5 + 32;
  return farenheit;
}
let celsius = prompt("Enter the temperature into celsius :");

celsius = parseFloat(celsius);

if (!isNaN(celsius)) {
  let farenheit = celsiustofarenheit(celsius);
  console.log(celsius + " celsius is equal to " + farenheit + "F");
} else {
  console.log("Please enter a valid number!!!");
}
