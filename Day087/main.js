const fs = require("fs");
// console.log(fs);

console.log("Starting");

// fs.writeFileSync("anas.txt", "Anas is a good boy.");

// fs.writeFile("anas2.txt", "Anas is a good boy.", () => {
//   console.log("done");
//   fs.readFile("anas2.txt", (error, data) => {
//     console.log(error, data.toString());
//   });
// });

fs.appendFile("anas.txt", "He is a Computer Science Graduate.", (e, d) => {
  console.log(d);
});

console.log("Ending");
