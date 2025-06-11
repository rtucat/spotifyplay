const http = require('http');

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', err => {
    console.error(`Failed to start server: ${err.message}`);
    process.exit(1);
});

module.exports = server;
