const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require('body-parser');

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(router);

module.exports = server;
