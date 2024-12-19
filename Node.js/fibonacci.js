var a = 0;
var b = 1;
var c;

console.log(a);
console.log(b);

for (i = 0; i < 8; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}
