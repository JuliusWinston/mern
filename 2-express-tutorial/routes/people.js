const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', (req, res) => {
	return res.status(200).json({success: true, data: data.people});
});

router.get('/:id', (req, res) => {
	const person = data.people.find((p) => p.id === Number(req.params.id));
	if(!person) return res.status(401).json({success: false, msg: `Person with id ${req.params.id} was not found!`});
	return res.status(200).json({success: true, data: person});
});

router.post('/', (req, res) => {
	const id = data.people.at(-1).id + 1 || 1;
	const {name} = req.body;
	if(!name) return res.status(401).json({success: false, msg: `Please provide name`});
	const person = {"id": id, name: name};
	const people = [...data.people, person];
	return res.status(200).json({success: true, data: people});
});

router.put('/:id', (req, res) => {
	const person = data.people.find((p) => p.id === Number(req.params.id));
	if(!person) return res.status(401).json({success: false, msg: `Person with id ${req.params.id} was not found!`})
	const {name} = req.body;
	if(!name) return res.status(401).json({success: false, msg: `Please provide new name`});
	person.name = name;
	return res.status(200).json({success: true, data: data.people});
});

router.delete('/:id', (req, res) => {
	const person = data.people.find((p) => p.id === Number(req.params.id));
	if(!person) return res.status(401).json({success: false, msg: `Person with id ${req.params.id} was not found!`});
	const filterPeople = data.people.filter((p) => p.id !== Number(req.params.id));
	return res.status(200).json({success: true, data: filterPeople});
});

module.exports = router;