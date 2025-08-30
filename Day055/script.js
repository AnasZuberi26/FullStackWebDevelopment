console.log("Hey this is tutorial 55.");

var a = 5;
var b = 6;

console.log(a + b);
console.log(a + b + 4);

var c = "Anas Kamboh";
console.log(typeof a, typeof b, typeof c);

// var _a = 55  //Valid
// var 55a = 55    //Not Valid

// const num = 20
// num = num + 20    //Not possible because it is a constant variable

// We use let instead of var because var is a global scope variable but let is a block scope variable

a = a + 1;
console.log(a);

{
  let a = 66;
  console.log(a);
}

console.log(a);


let x = "Anas Munir";
let y = 22;
let z = 3.35;
const p = true;
let q = undefined
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);


let o = {
    name: "Anas",
    "job role": "Developer"
}

console.log(o);

o.salary = "500K"
console.log(o);

o.salary = "600K"
console.log(o);

o.isbuilder = true
console.log(o);