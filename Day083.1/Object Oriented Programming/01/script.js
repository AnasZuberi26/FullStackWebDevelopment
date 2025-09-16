// function getAgeYear(age) {
//   return new Date().getFullYear() - age;
// }

// console.log(getAgeYear(24));

// const user = {
//   firstName: "Anas",
//   lastName: "Munir",
//   age: 24,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user.age;
//   },
// };

// const user2 = {
//   firstName: "Muhammad",
//   lastName: "Munir",
//   age: 53,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user2.age;
//   },
// };

// console.log(user.getAgeYear());
// console.log(user2.getAgeYear());

// function createUser(firstName, lastName, age) {
//   const user = {
//     // firstName: firstName,
//     // lastName: lastName,
//     // age: age,
//     firstName,
//     lastName,
//     age,
//     getAgeYear () {
//       return new Date().getFullYear() - age;
//     },
//   };
//   return user;
// }

// console.log(createUser("Muhamnad", "Munir", 53));
// console.log(createUser("Muhamnad", "Munir", 53).getAgeYear());

// const user1 = createUser("Anas", "Munir", 24)
// console.log(user1);
// console.log(user1.getAgeYear());

// console.log(user1.getAgeYear() === createUser("Muhamnad", "Munir", 53).getAgeYear());

// function getAgeYear() {
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear,
//   };
//   return user;
// }

// console.log(createUser("Muhamnad", "Munir", 53));
// console.log(createUser("Muhamnad", "Munir", 53).getAgeYear());

// const user1 = createUser("Anas", "Munir", 24);
// console.log(user1);
// console.log(user1.getAgeYear());

// console.log(user1.getAgeYear === createUser("Muhamnad", "Munir", 53).getAgeYear);

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getAgeYear: createUser.commonMethods.getAgeYear,
//   };
//   return user;
// }

// createUser.commonMethods = {
//   getAgeYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// console.log(createUser("Muhamnad", "Munir", 53));
// console.log(createUser("Muhamnad", "Munir", 53).getAgeYear());

// const user1 = createUser("Anas", "Munir", 24);
// console.log(user1);
// console.log(user1.getAgeYear());

// console.log(user1.getAgeYear === createUser("Muhamnad", "Munir", 53).getAgeYear);

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//   };
//   return user;
// }

// console.log(createUser("Muhamnad", "Munir", 53));

// const user1 = createUser("Anas", "Munir", 24);
// console.log(user1);

function createUser(firstName, lastName, age) {
 this.firstName = firstName,
 this.lastName = lastName,
 this.age = age
}

createUser.prototype.getAgeYear =  function(){
  return new Date().getFullYear() - this.age
}

console.log(new createUser("Muhamnad", "Munir", 53));
console.log(new createUser("Muhamnad", "Munir", 53).getAgeYear());

const user1 = new createUser("Anas", "Munir", 24);
console.log(user1);
console.log(user1.getAgeYear());

// console.log(user1.getAgeYear === new createUser("Muhamnad", "Munir", 53).getAgeYear);

// console.log(createUser.prototype);
// console.log(user1.__proto__);
