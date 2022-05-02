let myMap = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

let numbers = [1, 2, 3, 4];

let timesTen = number => number * 10;

let newArray = myMap(numbers, timesTen);

console.log(newArray);