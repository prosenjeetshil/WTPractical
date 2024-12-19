const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("register.html", (err, data) => {
      if (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  })
  .listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
  });
