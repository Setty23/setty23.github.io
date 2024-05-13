// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path')
// Create an Express application
const app = express();

// Configure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'chemical_property'
});
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
  // Extract data from the form
  const symbol = req.body.symbol;
  connection.query(query, [symbol], (err, results) => {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      res.status(500).send('Error querying database');
      return;
    }

    if (results.length === 0) {
      // If no data is found for the given symbol, return an appropriate response
      res.status(404).send('No data found for the specified symbol');
      return;
    }

    // Extract the specific data you need from the results
    const extractedData = {
      element: results[0].Element,
      atomicNumber: results[0].AtomicNumber,
      atomicMass: results[0].AtomicMass,
      // Add more properties as needed
    };

    // Return the result to the client
    res.json(results);
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
