// Import core HTTP module and downloaded NPM package
const http = require('http');
const uc = require('upper-case');

// Create the server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header status and Content-Type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Use the package to convert text to upper case and write response
  res.write(uc.upperCase("Hello World from RAHAM Node.js!"));
  
  // End the response
  res.end();
});

// Server listens on port 3000
server.listen(8080, () => {
  console.log('Server running at http://localhost:3000/');
});
