var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "Product",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected...");
  var sql = "ALTER TABLE Product_details ADD Product_status Varchar (25)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("column inserted successfuly...");
  });
});
