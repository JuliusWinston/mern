const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
	return res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
	const newProducts = products.map((products) => {
		const {id, name, image} = products;
		return {id, name, image};
	});
	return res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
	const product = products.find(prd => prd.id === parseInt(req.params.productID));
	if(!product) return res.status(404).send("Product not found");
	return res.json(product);
});

app.get('/api/v1/query', (req, res) => {
	const {search, limit} = req.query;
	let sortedProducts = [...products];

	if(search){
		sortedProducts = sortedProducts.filter((prod) => {
			return prod.name.startsWith(search);
		});
	}
	if(limit) sortedProducts = sortedProducts.slice(0, Number(limit));
	if(sortedProducts.length < 1){
		// res.status(200).send('No products found');
		return res.status(200).json({success: true, data: []});
	}
	res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
	console.log(`Server is running on port: 5000`);
});