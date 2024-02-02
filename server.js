// server.js

// [Set up simple Node Server project]: https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09
// Contains the code for setting up the Node server and initializing Express.

const express = require("express");

// Routes and other server setup...
const app = express();

// Test output
// app.get("/", function (req, res) {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("Hello World!");
// });

// Server listening on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Exporting the app for use in other files
module.exports = app;

// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("Hello World!");
//   })
//   .listen(8080);
