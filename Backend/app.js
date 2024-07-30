require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// DATABASE CONNECTIONS
async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
    .then(() => console.log('Database is Connected..👍'))
    .catch(err => console.log(err.message));

// AUTH ROUTES
const authRoutes = require('./src/routes/refreshToken.routes');
app.use('/api/auth', authRoutes);

// USER ROUTES
const userRoutes = require('./src/routes/user.routes');
app.use('/api/user', userRoutes);

// TODO ROUTES
const toDoRoutes = require('./src/routes/todo.routes');
app.use('/api/todo', toDoRoutes);

// SESSION ROUTES
const sessionRoutes = require('./src/routes/session.routes');
app.use('/api/session', sessionRoutes);


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
