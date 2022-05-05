var p = new Promise(function (resolve, reject) {
  var x = Math.random();
  return x < 0.5 ? resolve() : reject([x, 1]);
})
  .then(function () {
    return new Promise(function (resolve, reject) {
      var y = Math.random();
      return y < 0.5 ? resolve() : reject([y, 2]);
    });
  })
  .then(function () {
    console.log("Both promises sucessfully resolved!");
  })
  .catch(function (val) {
    console.log("Promise #" + val[1] + " rejected: value was " + val[0]);
  });

  p.then((message) => {
      console.log(message);
    }
  );