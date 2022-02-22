const express = require('express');
const app = express();

const PORT = 12345;

const connectDB = require('./config/db');
connectDB();

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})