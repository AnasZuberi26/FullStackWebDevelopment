let students = [
  "Anas",
  "Faiq",
  "Muhammad",
  "Hesham",
  "Hasnat",
  "Hassan",
  "Moiz",
  "Abdul Rehman",
  "Arham",
  "Azam",
  "Huzaifa",
];

let houses = [];

for (const student of students) {
  if (student.length < 6) {
    houses.push("Graffinder");
  } else if (student.length < 8) {
    houses.push("Hufflepuff");
  } else if (student.length < 12) {
    houses.push("Ravenclaw");
  } else {
    houses.push("Slytherin");
  }
}

students.forEach((element) => {
  index = students.indexOf(element);
  console.log(element, ":", houses[index]);
});
