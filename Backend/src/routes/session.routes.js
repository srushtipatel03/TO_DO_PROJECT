const express = require("express");
const sessionRoutes = express.Router();
const { getSessions } = require("../controller/session.controller");
const { userVerifyToken } = require("../helpers/verifyToken");

sessionRoutes.get("/", userVerifyToken, getSessions);

module.exports = sessionRoutes;
