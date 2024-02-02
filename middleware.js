// middleware.js
// Uses the Express.js framework in Node.js to set up middleware for a web server.

const express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");

const app = require("./server");

app
  // [1] Serves static files from the 'public' directory.
  // Sets up a middleware to serve static files from the 'public' directory.
  // express.static is a built-in middleware function in Express to serve static files, such as images, CSS files, and JavaScript files.
  .use(express.static(__dirname + "/public"))

  // [2] Enables CORS support, allowing the server to handle requests from different origins.
  // CORS: A mechanism that allows or restricts requested resources on a web server based on where the HTTP request originated.
  // cors() function returns middleware that enables CORS with various options. It allows the server to handle requests from different origins.
  .use(cors())

  // [3] Parses incoming cookies and makes them accessible through req.cookies in subsequent middleware or route handlers.
  // cookieParser() is a middleware which parses cookies attached to the client's request.
  // It populates req.cookies with an object containing the cookies sent by the client.
  .use(cookieParser()); // Adds middleware to parse cookies from incoming requests.
