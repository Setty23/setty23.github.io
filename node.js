const http = require('http');

const options = {
  hostname: 'localhost',
  port: 8080, // Change the port number if your server is running on a different port
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log
