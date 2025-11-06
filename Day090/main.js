const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const birds = require("./routes/blogs")

// app.use(express.static("public"));
app.use("/birds", birds)

const myLogger = function (req, res, next) {
  console.log(req.headers);
  req.harry = 56;
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  //   res.send("Hacked by M-1");
  next();
};

// Middleware 1 - Logger for our application
app.use(myLogger);

// Middleware 2
app.use((req, res, next) => {
  console.log("LOGGED-2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World! " + req.harry);
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
