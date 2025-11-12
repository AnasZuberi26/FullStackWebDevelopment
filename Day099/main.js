const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("views"));

mongoose.connect("mongodb://localhost:27017/company");

const getRandom = (arr) => {
  let rno = Math.floor(Math.random() * arr.length);
  return arr[rno];
};

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});

  let randomNames = ["Anas", "Azam", "Abrar", "Afzan"];
  let randomLanguage = ["Python", "Javascript", "React.js", "Next.js"];
  let randomCities = ["Rawalpindi", "Gujranwala", "Multan", "Lahore"];

  for (let index = 0; index < 10; index++) {
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 200000),
      language: getRandom(randomLanguage),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5 ? true : false,
    });
    console.log(e);
    await e.save();
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
