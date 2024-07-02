// Import the 'http' module, which is a built-in module in Node.js that allows us to create an HTTP server.
const http = require('http');

// Create an HTTP server using the 'http' module. The 'createServer' method takes a callback function
// that is executed each time the server receives a request.
const server = http.createServer((req, res) => {
    // Check if the request URL is '/' (the root route) and the request method is 'GET'.
    if (req.url === '/' && req.method === 'GET') {
        // Write the response header with a status code of 200 (OK) and a content type of 'text/html'.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // End the response and send back a simple HTML message.
        res.end('<h1>Welcome to the Home Page</h1>');
    }
    // Check if the request URL is '/api' and the request method is 'GET'.
    else if (req.url === '/api' && req.method === 'GET') {
        // Write the response header with a status code of 200 (OK) and a content type of 'application/json'.
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // End the response and send back a JSON object with a greeting message.
        res.end(JSON.stringify({ message: 'Hello, this is the API route!' }));
    }
    // If the request URL is anything else or the method is not 'GET', handle it as a 'Not Found' error.
    else {
        // Write the response header with a status code of 404 (Not Found) and a content type of 'text/plain'.
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        // End the response and send back a simple error message.
        res.end('404 Not Found');
    }
});

// Define the port number that the server will listen on. In this case, it is port 3000.
const PORT = 3000;

// Start the server and have it listen on the specified port (3000). The callback function is executed
// once the server starts successfully, logging a message to the console.
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
