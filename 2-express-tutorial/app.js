const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

//Route middleware
const root = require('./routes/root');
const auth = require('./routes/auth');
const people = require('./routes/people');

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));
app.use(express.json());

app.get('/', root);
app.use('/login', auth);
app.use('/api/people', people);

app.listen(PORT, () => {
	console.log(`Server running of port: ${PORT}`);
});