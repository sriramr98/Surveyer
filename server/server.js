const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to surveyer');
});

const { PORT } = require('./config/keys');
app.listen(PORT, () => {
    console.log(`Process started on PORT ${PORT}`);
});
