const { Router } = require("express");
const { login: controller } = require("../controllers");

const { getAll } = controller;

const login = Router();

login.get("/", getAll);

module.exports = login;
