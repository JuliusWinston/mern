const EventEmitter = require('events');
const customEvent = new EventEmitter();

customEvent.on('response', (name, id) => {
	console.log(`User ${name} with id: ${id} received`);
});
customEvent.on('response', () => {
	console.log(`Some other logic`);
});

customEvent.emit('response', 'Dev winston', 12); //Always comes after listening for the event(s) - it takes optional arguments also