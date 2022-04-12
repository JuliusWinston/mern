const fs = require('fs');
const http = require('http');

console.log('stream example');

http.createServer((req, res) => {
	const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
	fileStream.on('open', () => {
		fileStream.pipe(res);
	});
	fileStream.on('error', (err) => {
		res.end(err);
	});
}).listen(5000); 