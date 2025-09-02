let num1 = prompt("Enter 1st number : ");
let num2 = prompt("Enter 2nd number : ");
let operation = prompt("Enter operation : ");

let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
} else {
  operation = obj[operation];
  alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}
