var fs = require('fs');
var data = 'Here you are. It is a nice place.';

// This is a comment.
var writeStream = fs.createWriteStream('input.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
    console.log('Write finished!');
});

writeStream.on('error', function(error) {
    console.log(error.stack);
});

console.log('Progress end.');
