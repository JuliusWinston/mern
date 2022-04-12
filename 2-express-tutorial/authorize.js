const authorize = (req, res, next) => {
	const {user} = req.query;
	if(user === 'Winston') {
		req.user = {"name": user, "id": 7};
		next();
	}else{
		res.status(401).send('Unauthorized!');
		next();
	}
}

module.exports = authorize;