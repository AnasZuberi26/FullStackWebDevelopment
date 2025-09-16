class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  set fullName(fullName) {
    const splitted = fullName.split(" ");
    this.firstName = splitted[0];
    this.lastName = splitted[1];
  }
}

class Student extends User {
  constructor(firstName, lastName, age, standard) {
    super(firstName, lastName, age);
    this.standard = standard;
  }
  study() {
    console.log("Studying");
  }
}

class Employee extends User {
  constructor(firstName, lastName, age, company) {
    super(firstName, lastName, age);
    this.company = company;
  }
  work() {
    console.log("Working");
  }
}

const user1 = new User("Anas", "Munir", 24);
const student1 = new Student("Anas", "Munir", 24, "BsCS");
const employee1 = new Employee("Anas", "Munir", 24, "Google");
