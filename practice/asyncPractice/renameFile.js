var fs = require('fs');

fs.rename('textfile.txt', 'renamedFile.txt', err => {
  if (err) throw err;
  console.log('File renamed');
})
