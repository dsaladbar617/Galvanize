class Computer {
  constructor(cpu){
    this.cpu = cpu;
    this.drives = [];
  };

  addStorage(drive) {
    drive instanceof Drive ? this.drives.push(drive) : null;
  }

  reformat() {
    this.drives.forEach(drive => drive.wipe());
  }
};
class Processor {
  constructor(brand, model, power) {
    this.brand = brand;
    this.model = model;
    this.power = power;
  };

  listSpecs() {
    return `The ${this.brand} ${this.model} produces ${this.power} gHz of processing power.`
  }
};
class Drive {
  constructor(type, maxSpace) {
    this.type = type;
    this.maxSpace = maxSpace;
    this.data = [];
    this.spaceRemaining = maxSpace;
  };

  write(data) {
    this.data.push(data);
    this.spaceRemaining -= data.size;
  }

  wipe() {
    this.data = [];
    this.spaceRemaining = this.maxSpace;
  }
};