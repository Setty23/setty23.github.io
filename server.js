import express from 'express';
import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/element/:symbol', (req, res) => {
  let symbol = req.params.symbol;
  let data = {};

  const filePath = '/var/lib/mysql-files/Periodic.csv';

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      if (row.Symbol === symbol) {
        data.atomicNumber = parseInt(row.AtomicNumber);
        data.element = row.Element;
        data.symbol = row.Symbol;
        data.atomicMass = parseFloat(row.AtomicMass);
        data.phase = row.Phase;
        data.radioactive = (row.Radioactive === 'yes');
        data.natural = (row.Natural === 'yes');
        data.metal = (row.Metal === 'yes');
        data.nonmetal = (row.Nonmetal === 'yes');
        data.metalloid = (row.Metalloid === 'yes');
        data.type = row.Type;
        data.atomicRadius = parseFloat(row.AtomicRadius);
        data.electronegativity = parseFloat(row.Electronegativity);
        data.firstIonization = parseFloat(row.FirstIonization);
        data.density = parseFloat(row.Density);
        data.meltingPoint = parseFloat(row.MeltingPoint);
        data.boilingPoint = parseFloat(row.BoilingPoint);
        data.numberOfIsotopes = parseInt(row.NumberOfIsotopes);
        data.discoverer = row.Discoverer;
        data.year = parseInt(row.Year);
        data.specificHeat = parseFloat(row.SpecificHeat);
        data.numberOfShells = parseInt(row.NumberofShells);
        data.numberOfValence = parseInt(row.NumberofValence);
      }
    })
    .on('end', () => {
      if (Object.keys(data).length === 0) {
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
