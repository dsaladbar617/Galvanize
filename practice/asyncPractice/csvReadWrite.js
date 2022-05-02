let fs = require('fs');

function myFunction(inputFileName, outputFileName){
  // use the below methods in your code (you will need to change the passed in parameters)

  //Reads an input file and returns the contents as a string
  let names = fs.readFileSync(inputFileName, 'utf-8');
  let entries = [];
  let resultArr = [];

  names = names.split('\n');
  for (let i = 0; i < names.length; i++) {
    let splitNames = names[i].split(',')
    entries.push(splitNames);
    if (i > 0) {
      let entry = {'First Name': entries[i][0], 'Last Name': entries[i][1]}
      resultArr.push(entry);
    }
  }

  let answer = JSON.stringify(resultArr);

  console.log(answer)
  //writes the contents to a file
  fs.writeFileSync(outputFileName, answer);

  //deletes a file
  fs.unlinkSync(inputFileName)

  }


myFunction('names.csv', 'nameObject.json');