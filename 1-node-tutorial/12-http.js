const http = require('http');
const PORT = process.env.PORT || 9000;

const server = http.createServer((req, res) => {
    if(req.url === '/') return res.end('Welcome to the home page!');
    if(req.url === '/about') return res.end('Here is our history...');
    return res.end(`
        <h1>Ooops!</h1>
        <p>Requested page could not be found!</p>
        <a href="/">Go back home</a>
    `);
});

server.listen(PORT, ()=>{
    `Server running on port ${PORT}`;
});
