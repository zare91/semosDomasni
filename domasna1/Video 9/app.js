var fs = require('fs');

// var readMe = fs.readFileSync('readme.txt', 'utf8');
//console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('writeME1.txt', data);
});
//console.log ('test');
