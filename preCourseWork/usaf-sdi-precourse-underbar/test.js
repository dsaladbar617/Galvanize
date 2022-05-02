var object = { a: 1, b: 2, c: 3 };
var value = 1;

reduce = function(collection, iterator, accumulator) {
  let start = accumulator === undefined ? 0 : accumulator;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      start = iterator(start, collection[i]);
    }
    return start;
  } else {
    for (let i = 0; i < Object.keys(collection).length; i++) {
      start = iterator(start, collection[i], i, collection);
      console.log(collection[i]);
    }
    return start;
  }

};

contains = function(collection, target) {
  return reduce(collection, function(wasFound, item) {
    if (wasFound) {
      return true;
    }
    return item === target;
  }, false);
};

console.log(contains(object, value))