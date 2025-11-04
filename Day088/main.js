// const { createServer } = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact");
});

app.get("/about", (req, res) => {
  res.send("Hello About");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog");
});

// app.get("/blog/intro-to-js", (req, res) => {
//   res.send("Intro to Javascript");
// });

// app.get("/blog/python", (req, res) => {
//   res.send("Intro to Python");
// });

app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.slug}`);
});

app.get("/blog/:slug/:second", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.slug} and ${req.params.second}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
