class Shape{
  #creator
  constructor (name, numberOfSides, creator) {
    this.name = name;
    this.numberOfSides = numberOfSides;
    this.#creator = creator
  }
  static printer() {
    console.log('this is a shape')
  }

  get creator() {
    return this.#creator;
  }

  set creator(newValue) {
    this.#creator = newValue;
  }

  printInfo() {
    console.log(`${this.name} has ${this.numberOfSides} sides.`);
  }
}

class Triangle extends Shape {
  #creator
  constructor(name, numberOfSides, creator, type) {
    super(name, numberOfSides, creator);
    this.type = type;
  }
  static printer() {
    console.log('this is a giraffe');
  }
  printInfo() {
    console.log(`${this.name} is a ${this.type} triangle with ${this.numberOfSides} sides`)
  }

  get creator() {
    return this.#creator;
  }

  set creator(newValue) {
    this.#creator = newValue;
  }



}

let tri = new Triangle('tri', 3, 'Not Me', 'right');

let square = new Shape('square', 4, 'me');
console.log(tri.creator)