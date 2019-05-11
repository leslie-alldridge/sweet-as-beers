const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "../public")));

// routes for authentication
server.use("/auth", require("./routes/auth"));

module.exports = server;
