function revNum(a) {
  var rev = 0;
  var temp = a;
  while (a != 0) {
    r = a % 10;
    rev = rev * 10 + r;
    a = parseInt(a / 10);
  }
  console.log("Reverse of " + temp + " is " + rev);
}
revNum(1234);
revNum(3041602);
