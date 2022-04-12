const http = require('http');
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res)=>{
	console.log('Request event');
	res.end('Welcome to the homepage');
});

server.listen(PORT, ()=>{
	console.log(`Server running on port: ${PORT}`);
});