let a = prompt("Enter first number: ");
let b = prompt("Enter second number: ");

// let sum = a + b

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a) + parseInt(b);
let x = 1;

function main() {
  try {
    console.log("The sum is: ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa geya hai bhai");
    // alert(error.name)
    // alert(error.message)
    // alert(error.stack)
    return false;
  } finally {
    console.log("Files are being closed and DB connection is being closed");
  }
}

let c = main();
