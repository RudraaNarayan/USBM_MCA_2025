// Import modules
const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Root route
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Successfully Loaded the Root Page");
  } else if (req.url === "/contact") {
    // Contact route
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Successfully Loaded the Contact Page");
  } else {
    // 404 Not Found
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

// Server listener
server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
