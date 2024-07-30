// const User = require('../model/user.model');
// const jwt = require('jsonwebtoken');

// // Middleware to verify the JWT token
// exports.userVerifyToken = async (req, res, next) => {
//     try {
//         // Extract the token from the Authorization header
//         const authorization = req.headers['authorization'];
//         if (!authorization) {
//             return res.status(401).json({ message: 'Authorization header missing' });
//         }

//         // Split the header to get the token
//         const token = authorization.split(' ')[1];
//         if (!token) {
//             return res.status(401).json({ message: 'Token missing from authorization header' });
//         }

//         // Verify the token
//         const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
//         if (!userId) {
//             return res.status(401).json({ message: 'Invalid token' });
//         }

//         // Fetch the user from the database
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         // Attach the user to the request object
//         req.user = user;
//         next();
//     } catch (error) {
//         console.error('Error verifying token:', error);
//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({ message: 'Token expired' });
//         } else {
//             return res.status(500).json({ message: 'Internal server error' });
//         }
//     }
// };

// // Middleware to refresh the JWT token
// exports.refreshToken = async (req, res) => {
//     const { refreshToken } = req.body;

//     if (!refreshToken) {
//         return res.status(401).json({ message: 'Refresh token missing' });
//     }

//     try {
//         const { userId } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(401).json({ message: 'User not found' });
//         }

//         const newAccessToken = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
//         const newRefreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

//         res.status(200).json({
//             accessToken: newAccessToken,
//             refreshToken: newRefreshToken,
//             message: 'Token refreshed successfully',
//         });
//     } catch (error) {
//         console.error('Error refreshing token:', error);
//         if (error.name === 'TokenExpiredError') {
//             return res.status(401).json({ message: 'Refresh token expired' });
//         } else {
//             return res.status(500).json({ message: 'Internal server error' });
//         }
//     }
// };



const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

// Middleware to verify the JWT token
exports.userVerifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        const token = authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token missing from authorization header' });
        }

        const { userId } = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!userId) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        } else {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};

// Middleware to refresh the JWT token
exports.refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token missing' });
    }

    try {
        const { userId } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const newAccessToken = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        const newRefreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
            message: 'Token refreshed successfully',
        });
    } catch (error) {
        console.error('Error refreshing token:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Refresh token expired' });
        } else {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
};
