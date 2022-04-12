const express = require('express');
const app = express();

const authorize = require('./authorize');
const logger = require('./logger');

// app.use([logger, authorize]);
// use vs route
// options: custom, express, third-party

app.get('/', (req, res) => {
	res.send('Home');
});
app.get('/about', (req, res) => {
	res.send('About');
});
app.get('/api/products', (req, res) => {
	res.send('Products');
});
app.get('/api/items', [logger, authorize], (req, res) => {
	console.log(req.user);
	res.send('Items');
});

app.listen(5000, () => {
	console.log(`Server running of port: 5000`);
});