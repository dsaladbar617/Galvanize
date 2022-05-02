function exercise (num, func) {
  return func(num);
}

var a = exercise(10, function (x) {
  return x + 2;
});

var b = exercise(15, function (x) {
  return x * 2;
});

var result = a + b;

console.log(result);