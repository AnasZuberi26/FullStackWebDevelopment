console.log("Hello I am Conditional Tutorial.");

let age = 17;
let grace = 2;

if (age + grace > 18) {
  console.log("You can drive.");
} else if (age == 0) {
  console.log("Are you kidding?");
} else {
  console.log("You can't drive.");
}

// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);
// console.log(++age);
// console.log(--age);

// age += grace
// console.log(age);

// console.log(age == 18);
// console.log(age != 18);
// console.log(age > 18);
// console.log(age < 18);
// console.log(age >= 18);
// console.log(age <= 18);

// console.log("3" == 3);
// console.log("3" === 3);
// console.log("3" != 3);
// console.log("3" !== 3);

// a = 6;
// b = 7;

// console.log(a != b && b != a)
// console.log(a != b || b == a)
// console.log(!true);

c = age>grace ?(age+grace) :(age-grace)
console.log("Value of c : ",c)