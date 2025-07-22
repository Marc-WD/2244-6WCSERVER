// Author: John Smith
// Date: July 22, 2025
// Section: BSCS 3A

const http = require('http');
const rootPage = require('./rootPage');
const aboutPage = require('./aboutPage');
const contactPage = require('./contactPage');

const port = 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        res.write(rootPage('John Smith'));
    } else if (req.url === '/about') {
        res.write(aboutPage('John Smith'));
    } else if (req.url === '/contact') {
        res.write(contactPage('John Smith'));
    } else if (req.url === '/gallery') {
        res.write('<h1>This is the Gallery Page</h1>');
    } else {
        res.write('Invalid Request');
    }

    // Footer: name, date, and section
    res.write('<br><br><small>Canlas, Marc O. - July 22, 2025 - WD - 304</small>');
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
