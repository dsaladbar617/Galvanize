let Queue = require('./index');

describe('queue tests', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(9);
    queue.enqueue(7);
    queue.enqueue(400);
    queue.enqueue(13);
    queue.enqueue(8);
  })

  test('should "dequeue items in a FIFO order', () => {
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(9);
  })

  test('should determine if any values contained in queue are even', () => {
    expect(queue.hasEvenNumbers()).toBe(true);
  })

  test('removesEvenNumbers function returns an array with even numbers removed.', () => {

    expect(queue.removesEvenNumbers()).toEqual([9, 7, 13]);


  });

})