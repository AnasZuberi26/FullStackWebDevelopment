// -------------------------Vote Validator-------------------------

// let age = Number(prompt("Enter your age: "));

// if(age>=18){
//     console.log('You are eligible to vote.');
// }else if(age<18){
//     console.log('You are not eligible to vote.');
// }else if(isNaN(age)){
//     console.log('Enter a valid age.');
// }

// -------------------------Shop Discount-------------------------

// let amount = Number(prompt("Enter your bill amount: "));

// if (amount > 0 && amount <= 5000) {
//   console.log("Your Bill Amount: " + amount +' Pkr');
//   console.log("Discount: 0%");
//   console.log('Discount: 0 Pkr');
//   console.log("Your Final Bill Amount is: " + amount +' Pkr');
// } else if (amount <= 7000) {
//   console.log("Your Bill Amount: " + amount) +' Pkr';
//   console.log("Discount: 5%");
//   console.log("Discount: " +(Math.floor(amount * 0.05)) +' Pkr');
//   console.log("Your Final Bill Amount is: " + (amount - Math.floor(amount * 0.05)) +' Pkr');
// } else if (amount <= 9000) {
//     console.log("Your Bill Amount: " + amount +' Pkr');
//     console.log("Discount: 10%");
//     console.log("Discount: " +(Math.floor(amount * 0.1)) +' Pkr');
//     console.log("Your Final Bill Amount is: " + (amount - Math.floor(amount * 0.1)) +' Pkr');
// } else if (amount > 9000) {
//     console.log("Your Bill Amount: " + amount +' Pkr');
//     console.log("Discount: 20%");
//     console.log("Discount: " +(Math.floor(amount * 0.2)) +' Pkr');
//   console.log("Your Final Bill Amount is: " + (amount - Math.floor(amount * 0.2)) +' Pkr');
// }

// -------------------------Electricity Bill-------------------------

// let units = Number(prompt('Enter units: '));

// if(units<=100){
//     console.log('Electricity Bill: ' +(units*4));
// }else if(units>100 && units<=200){
//     console.log('Electricity Bill: ' +(((units-100)*6)+(100*4)));
// }else if(units>200 && units<=400){
//     console.log('Electricity Bill: ' +(((units-200)*8)+(100*6)+(100*4)));
// }else if(units>400){
//     console.log('Electricity Bill: ' +(((units-400)*13)+(200*8)+(100*6)+(100*4)));
// }

// -------------------------PKR Demolisition-------------------------

// let amount = 38;

// if(amount >= 5000){
//     console.log("5000 Notes: " +Math.floor(amount/5000));
//     amount %= 5000;
// }
// if(amount >= 1000){
//     console.log("1000 Notes: " +Math.floor(amount/1000));
//     amount %= 1000;
// }
// if(amount >= 500){
//     console.log("500 Notes: " +Math.floor(amount/500));
//     amount %= 500;
// }
// if(amount >= 100){
//     console.log("100 Notes: " +Math.floor(amount/100));
//     amount %= 100;
// }
// if(amount >= 50){
//     console.log("50 Notes: " +Math.floor(amount/50));
//     amount %= 50;
// }
// if(amount >= 20){
//     console.log("20 Notes: " +Math.floor(amount/20));
//     amount %= 20;
// }
// if(amount >= 10){
//     console.log("10 Notes: " +Math.floor(amount/10));
//     amount %= 10;
// }
// if(amount >= 5){
//     console.log("5 Coins: " +Math.floor(amount/5));
//     amount %= 5;
// }
// if(amount >= 2){
//     console.log("2 Coins: " +Math.floor(amount/2));
//     amount %= 2;
// }
// if(amount >= 1){
//     console.log("1 Coins: " +Math.floor(amount/1));
//     amount %= 1;
// }

// -------------------------Ternary Opetators-------------------------

// 12>13 ? console.log('True') : console.log('False');

// 12<13 ? console.log('True') : console.log('False');

// -------------------------Nested Ternary Opetators-------------------------

// let num = 0;

// console.log(num>0 ? "positive" : num<0 ? "negative" : "Neutral");

// -------------------------Switches in JS-------------------------

// let day = 3;

// switch (day) {
//     case 1:
//         console.log('Monday');
//         break;

//     case 2:
//         console.log('Tuesday');
//         break;

//     default:
//         console.log('Invalid');
//         break;
// }

let day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
    console.log("Monday");
    break;

  case 4:
  case 5:
  case 6:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
    break;
}
