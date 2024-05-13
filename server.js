const http = require('http');
const url = require('url');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse request URL
    const parsedUrl = url.parse(req.url, true);

    // Handle form submissions
    if (req.method === 'POST' && parsedUrl.pathname === '/submit-form') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert Buffer to string
        });
        req.on('end', () => {
            const formData = JSON.parse(body); // Assuming form data is in JSON format
            // Process the form data as needed
            console.log('Received form data:', formData);

            // Respond to the client
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Form data received successfully!');
        });
    } else {
        // Serve HTML file with the form
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
