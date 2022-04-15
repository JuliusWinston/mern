const { application } = require('express');
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const {people} = require('./data');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/people', express.static('./public'));

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, 'public', 'views', 'javascript.html'));
});

app.get('/api/people', (req, res) => {
	res.status(200).json({sucess: true, data: people});
});

app.post('/api/people', (req, res) => {
	const {name} = req.body;
	if(!name){
		return res.status(400).json({success: false, msg: `Please provide name`});
	}
	res.status(201).json({success: true, person: name});
});

app.put('/api/people/:id', (req, res) => {
	const person = people.find((prs) => prs.id === Number(req.params.id));
	if(!person) return res.status(400).json({success: false, msg: `Person with id ${req.params.id} was not found!`});
	const name = req.body.name;
	if(name) person.name = name;
	return res.status(200).json({success: true, data: people});
});

app.delete('/api/people/:id', (req, res) => {
	const person = people.find((prs) => prs.id === Number(req.params.id));
	if(!person) return res.status(401).json({success: false, msg: `Person with id ${req.params.id} was not found!`});
	const filterPeople = people.filter((person) => person.id !== Number(req.params.id));
	return res.status(200).json({success: true, data: filterPeople});
});

app.post('/login', (req, res) => {
	const {name} = req.body;
	if(name) return res.status(200).send(`Welcome ${name}`);
	res.status(401).send('Please provide name');
});

app.listen(5000, () => {
	console.log(`Server running of port: 5000`);
});