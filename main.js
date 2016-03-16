var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('Connect succeed!');

    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
    console.log('Data receive succeed!');
});

eventEmitter.emit('connection');

console.log('Progress finished!');
