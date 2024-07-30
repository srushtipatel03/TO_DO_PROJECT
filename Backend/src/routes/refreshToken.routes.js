const express = require('express');
const authRoutes = express.Router();
const { refreshToken } = require('../helpers/verifyToken');

authRoutes.post('/refresh-token', refreshToken);

module.exports = authRoutes;
