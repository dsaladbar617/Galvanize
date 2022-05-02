let fs = require('fs');

function myFunction(fileName){
  // Use the below methods in your code (you will need to change the passed in parameters)
  // Hint: the newline character used in this test is \n
  //Reads an input file and returns the contents as a string
  let names = fs.readFileSync(fileName, 'utf8', (err, data) => {
    return data;
  });

  let upperNames = names.split(/(\n|\s)/);
  console.log(upperNames);
  let resultStr = ""
  for (let i = 0; i < names.length; i++) {
    if (typeof(upperNames[i]) === 'string') {
      if (upperNames[i] !== '\n' || upperNames[i] !== ' ') {
        upperNames[i] = upperNames[i].charAt(0).toUpperCase() + upperNames[i].slice(1);
        resultStr = upperNames.join("");
      }
    }

  }

  console.log(resultStr);


  //console.log(names);
  //writes the contents to a file
  fs.writeFileSync(fileName, resultStr);

}

myFunction('listOfNames.txt');