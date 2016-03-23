var fs = require('fs');
var data = '';

var readStream = fs.createReadStream('input.txt');

readStream.setEncoding('UTF8');

readStream.on('data', function(content) {
    data += content;
});


readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function(error) {
    console.log(error.stack);
});

console.log('Progress end.');
