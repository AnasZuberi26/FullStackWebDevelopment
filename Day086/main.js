// const { createServer } = require("node:http");
// const fs = require("fs");

// import { createServer } from "http";

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

// --------------------Module--------------------

// import { a, b, c, d, e } from "./myModule.js";
// console.log(a, b, c, d, e);

// import obj from "./myModule.js";
// console.log(obj);

// import myObj from "./myModule.js";
// console.log(myObj);

// --------------------Commom-JS--------------------

const a = require("./myModule2.js");
console.log(a, __dirname, __filename);
