function displayresult(a) {
  console.log(a);
}

function check(num) {
  let sum = num;
  if (num % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number is Odd ");
  }
}
check(18, displayresult);
