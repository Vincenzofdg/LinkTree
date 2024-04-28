const express = require("express");
require("express-async-errors");

const { cors } = require("./tools");
const { login } = require("./routes");
const { errorHandler } = require("./middlewares");

const api = express();
api.use(express.json());
api.use(cors);

api.use("/login", login);

api.use(errorHandler);

module.exports = api;
