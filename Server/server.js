// Server/server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const Person = require('../Person/person');
const { log } = require('../Logs/logger');

const app = express();
const PORT = 3000;

const dataPath = path.join(__dirname, '../Data/mockData.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

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
