const express = require('express');
const userRoutes = express.Router();
const { registerUser, loginUser } = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);

module.exports = userRoutes;
