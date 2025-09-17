// --------------------Sum of two integers--------------------

// let a = 10;
// let b = 20;

// console.log(a+b);

// --------------------Integer vs String--------------------

// let a1 = 10;
// let b1 = "10";

// console.log(a1+b1);
// console.log(typeof(a1+b1));

// --------------------Type Coercoin in JS--------------------

// console.log('1'+1);             //Addition and Concatenation
// console.log('1'-1);             //Substraction only
// console.log('1'*1);             //Multiplication only
// console.log('1'/1);             //Division only

// --------------------Print the input number--------------------

// age = Number(prompt("What is your age:"));
// console.log(age);

// --------------------Numbers Swapping--------------------

// let x = 1;
// let y = 2;

// [x,y] = [y,x];

// console.log(x);
// console.log(y);

// --------------------Sum of digits--------------------

// let a = 4567;
// var sum = 0;

// for (let i = a; i > 1; i = Math.floor(i / 10)) {
//   sum = sum + (i % 10);
// }

// console.log("Sum of digits: " + sum);

// --------------------Area of rectangle--------------------

// let lenght = 23;
// let width = 22;

// let area = lenght*width;

// console.log('Area: ' +area);

// --------------------Perimeter of rectangle--------------------

// let lenght = 22;
// let width = 23;

// let perimeter = 2*(lenght+width);

// console.log('Perimeter: ' +perimeter);


// --------------------4 digit OTP generator--------------------

// console.log(Math.trunc(Math.random()*9000)+1000);


// --------------------Area of triangle--------------------

// let a = 5;
// let b = 4;
// let c = 3;

// let s = (a+b+c)/2;

// console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));

// --------------------Circumference of Circle--------------------

let r = 12;

console.log((2*Math.PI*r).toFixed(2));