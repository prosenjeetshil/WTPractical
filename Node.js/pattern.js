const pattern = function (num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    // printing spaces
    for (let j = 0; j < num - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
};
pattern(8);
