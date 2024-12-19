function primeNum() {
  console.log("The prime numbers from 1 to 50\n");
  for (i = 2; i <= 50; i++) {
    var count = 0;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        count = 1;
        break;
      }
    }
    if (count == 0) {
      console.log(i);
    }
  }
}
primeNum();
