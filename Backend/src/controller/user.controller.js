const userServices = require('../services/user.service');
const sessionService = require('../services/session.service');
const userService = new userServices();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required.' });
        }

        // Check if user already exists
        let user = await userService.getUser({ email });
        if (user) {
            return res.status(400).json({ message: 'User Already Registered' });
        }

        // Hash password and create new user
        let hashPassword = await bcryptjs.hash(password, 10);
        user = await userService.addNewUser({ name, email, password: hashPassword });
        let token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, message: 'New user added successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        let user = await userService.getUser({ email, isDelete: false });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Email! Check your email' });
        }

        let checkPassword = await bcryptjs.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({ message: 'Invalid Password! Check your password' });
        }

        let token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        let refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        // Record the session
        const ipAddress = req.ip; // Get the IP address of the request
        await sessionService.recordSession(user._id, ipAddress);

        res.status(200).json({ token, refreshToken, message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};