var net = require('net');
var client = net.connect({port: 8080}, function() {
    console.log('Connect server succeed!');
});

client.on('data', function(data){
    console.log(data.toString());
    client.end();
});

client.on('end', function() {
    console.log('Close connection with Server.');
});
