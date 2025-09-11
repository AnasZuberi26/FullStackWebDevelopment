// let obj = {
//   a: 1,
//   b: "Anas",
// };

// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;
// console.log(rabbit);
// console.log(rabbit.jumps);
// console.log(rabbit.eats);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created.");
  }
  eats() {
    console.log("Eating");
  }
  jumps() {
    console.log("Jumping");
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    // this.name = name;
    console.log("Lion obj is created.");
  }
  eats() {
    super.eats();
    console.log("Roar");
  }
}

// let a = new Animal("Bunny");
// console.log(a);
// console.log(a.eats());
// console.log(a.jumps());
// a.eats();
// a.jumps();
// console.log(a.name);

let l = new Lion("Shera");
// console.log(l);
// console.log(l.eats());
// console.log(l.jumps());
// console.log(l.name);

// l.name = "Robin";
// console.log(l);
// console.log(l.name);

// console.log(l instanceof Lion);
// console.log(l instanceof Animal);
