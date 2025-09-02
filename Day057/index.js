console.log("Loops in Javascript");

let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

for (let i = 1; i < 10; i++) {
  console.log("Value of i : ", i);
}

let obj = {
  age: 23,
  name: "Anas",
  role: "Computer Scientist",
};

for (const key in obj) {
  const element = obj[key];
  // console.log(key )
  // console.log(element)
  console.log(key, element);
}

for (const element of "Anas Munir") {
  console.log(element);
}

let i = 5;
while (i < 10) {
  console.log(i);
  i++;
}

// i = 5;
do {
  console.log(i);
  i++;
} while (i < 10);
