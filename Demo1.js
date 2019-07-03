
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Welcome to node js', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// var fs = require('fs');
// fs.appendFile('mynewfile3.txt', 'Welcome to node js', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });