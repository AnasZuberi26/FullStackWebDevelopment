class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static {
    console.log(
      "I am a static block in Javascript which run directly without creating instance. Which is used to make properties and functions static. After that these functions will move from constructor of class to class direclt. And a new created instance of that class cannot copy it in their prototype. They can only be accessed using the class only not the childs."
    );

    this.a = 12; //But can't be accessed outside class.
    // console.log(a);

    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }

  static greet = "Hello";

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  static getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Anas", "Munir", 24);
// console.log(user1.getBirthYear());
// console.log(user1.getFullName());
// console.log(CreateUser.greet);
// console.log(CreateUser.a);
// console.log(CreateUser.getFullName());               Still Can't access it
