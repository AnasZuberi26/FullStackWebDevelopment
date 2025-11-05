const express = require("express");
const app = express();

const blog = require("./routes/blog");
// ...

const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);

app
  .get("/", (req, res) => {
    console.log("This is a Get Request");
    res.send("Hello World!");
  })
  .post("/", (req, res) => {
    console.log("This is a Post Request");
    res.send("Hello World Post!");
  })
  .put("/", (req, res) => {
    console.log("This is a Put Request");
    res.send("Hello World Put!");
  })
  .delete("/", (req, res) => {
    console.log("This is a Delete Request");
    res.send("Hello World Delete!");
  })
  .get("/index", (req, res) => {
    console.log("Hey its index");
    res.sendFile("templates/index.html", { root: __dirname });
  })
  .get("/api", (req, res) => {
    console.log("Hey its API");
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry, jerry"] });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
