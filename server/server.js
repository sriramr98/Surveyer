const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to surveyer');
});

app.listen(3000, () => {
    console.log('Process started on PORT 3000');
});
