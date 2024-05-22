const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Periodic Table API!');
});

app.get('/element/:symbol', (req, res) => {
  let symbol = req.params.symbol;
  let data = [];

  const filePath = '/var/lib/mysql-files/Periodic.csv';

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.Symbol === symbol) {
        data.push(row);
      }
    })
    .on('end', () => {
      if (data.length === 0) {
        res.status(404).send('Element not found');
      } else {
        res.json(data);
      }
    })
    .on('error', (err) => {
      console.error('Error reading CSV file:', err);
      res.status(500).send('Internal Server Error');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Periodic Table API listening on port ${PORT}`);
});
