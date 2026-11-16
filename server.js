const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'PUBLIC')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'PUBLIC', 'index.html'));
});

app.use('/api/auth', authRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});