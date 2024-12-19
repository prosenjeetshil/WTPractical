const prompt = require("prompt-sync")();
const mk1 = parseInt(prompt("Enter the marks in ADBMS out of 100 :"));
const mk2 = parseInt(prompt("Enter the marks in Web Technology out of 100 :"));
const mk3 = parseInt(
  prompt("Enter the marks in Optimized Techniques out of 100 :")
);
const mk4 = parseInt(prompt("Enter the marks in Advanced Java out of 100 :"));
const mk5 = parseInt(prompt("Enter the marks in Data Structures out of 100 :"));
if (mk1 >= 45 && mk2 >= 45 && mk3 >= 45 && mk4 >= 45 && mk5 > 45) {
  console.log("You are eligible for the next semester");
  const sum = mk1 + mk2 + mk3 + mk4 + mk5;
  const perc = (sum / 500) * 100;
  console.log(`Your percentage is ${perc}%`);
  if (perc >= 80) {
    console.log("Grade : A");
  } else if (perc < 80 && perc >= 60) {
    console.log("Grade : B");
  } else if (perc < 60 && perc >= 35) {
    console.log("Grade : C");
  } else {
    ("You have failed the examinations!!!");
    console.log("Grade : F");
  }
}
