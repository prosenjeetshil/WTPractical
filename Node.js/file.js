const fs = require("fs");

fs.writeFile("com.txt", "Hello World", function (err, data) {
  console.log("Writing File");
});

fs.appendFile(
  "_com.txt",
  "\n Hello Everyone \n Give ThumbsUp",
  function (err, data) {
    console.log("Append File");
  }
);

fs.readFile("_com.txt", "utf-8", function (err, data) {
  console.log("Reading File");
  console.log(data);
});

fs.unlink("_com.txt", function (err, data) {
  console.log("Deleting File");
  console.log("File Deleted");
});

const fd = fs.openSync("com.txt", "r+");
const text = "Janet Doe";
const position = 0;
const numberOfBytesWritten = fs.writeSync(fd, text, position, "utf8");
console.log(`Bytes written :${numberOfBytesWritten}`);
