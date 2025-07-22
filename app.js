const http = require('http');
const root = require('./root');
const about = require('./about');
const contact = require('./contact');

const port = 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(root('John Smith'));
    } else if (req.url === '/about') {
        res.write(about('John Smith'));
    } else if (req.url === '/contact') {
        res.write(contact('John Smith'));
    } else if (req.url === '/gallery') {
        res.write('<h1>This is the Gallery Page</h1>');
    } else {
        res.write('Invalid Request');
    }

    // Add your name, date, section
    res.write('<br><br><small>John Smith - July 22, 2025 - BSCS 3A</small>');

    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
