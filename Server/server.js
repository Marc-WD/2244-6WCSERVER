// Server/server.js
const express = require('express');
const Person = require('../Person/person');
const { log } = require('../Logs/logs');
const data = require('../Data/data');

const app = express();
const PORT = 3000;

app.get('/people', (req, res) => {
  log(`GET /people`);

  const people = data.map(p => {
    const person = new Person(p.ID, p["First Name"], p["Last Name"], p.age);
    return person.greet();
  });

  res.json(people);
});

app.listen(PORT, () => {
  log(`Server is running at http://localhost:${PORT}`);
});

