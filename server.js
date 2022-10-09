const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server is running...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello World!</h3>');
    res.write('<h2>My name is Quyet!</h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
})