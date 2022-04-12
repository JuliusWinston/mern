const {readFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
	if(err){
		console.log(err);
	}
	console.log(result);
	console.log('Task completed');
});
console.log('starting next task');