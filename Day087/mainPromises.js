import fs from "fs/promises";

let a = await fs.readFile("anas.txt");
console.log(a.toString());

// let b = await fs.writeFile("anas.txt", "\n\n This is an amazing promise.");

let c = await fs.appendFile("anas.txt", "\n\n He is a good boy.");
