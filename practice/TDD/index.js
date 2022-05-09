class Queue {
  constructor() {
    this._array = [];
  }

  enqueue(value) {
    this._array.push(value);
  }

  dequeue() {
    let value = this._array.shift();
    return value;
  }

  hasEvenNumbers() {
    let evenElement = this._array.find(element => element % 2 === 0);
    if (evenElement)
      return true;
    return false;
  }

  removesEvenNumbers() {
    return this._array.filter(item => item % 2 !== 0)
  }
}

module.exports = Queue;