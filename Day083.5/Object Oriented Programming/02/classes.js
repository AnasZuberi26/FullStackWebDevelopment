// class CreateUser {}

// CreateUser.prototype.getAgeYear = function () {
//   return new Date().getFullYear() - this.age;
// };

// const user1 = new CreateUser("Anas", "Munir", 24);

// ------------------------------Classes in Javascript---------------------------------

// class CreateUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     // console.log(firstName, lastName, age);
//   }

//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   }

//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const user1 = new CreateUser("Anas", "Munir", 24);
// console.log(user1.getBirthYear());
// console.log(user1.getFullName());

// ------------------------Public and Private Fields in Javascript------------------------

class CreateUser {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  #greet = "Hello";

  getBirthYear() {
    console.log(this.#greet);
    console.log(this.#getFullName());
    return new Date().getFullYear() - this.#age;
  }

  #getFullName() {
    return this.#firstName + " " + this.#lastName;
  }

  getFullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const user1 = new CreateUser("Anas", "Munir", 24);
console.log(user1.getBirthYear());
console.log(user1.getFullName());

// const a = {
//   name: "Anurag",
//   // #age: 24         //Does not allowed in Javascript
//   '#age': 24,
// };

// console.log(a);
// console.log(a.name);
// console.log(a["#age"]);
