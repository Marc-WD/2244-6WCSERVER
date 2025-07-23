// Server/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const Person = require('../Person/person');
const { log } = require('../Logs/logger');

const dataPath = path.join(__dirname, '../Data/data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const server = http.createServer((req, res) => {
  log(`Request: ${req.method} ${req.url}`);

  if (req.url === '/people') {
    const people = data.map(p => {
      const person = new Person(p.ID, p["First Name"], p["Last Name"], p.age);
      return person.greet();
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(people));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  log('Server running on http://localhost:3000');
});
