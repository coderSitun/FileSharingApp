global.TextEncoder = require("util").TextEncoder; global.TextDecoder = require("util").TextDecoder;

const express = require('express');
const app = express();

const PORT = 12345;

//Connecting to Database
const connectDB = require('./config/db');
connectDB();

//Routes
app.use('/api/files', require('.routes/files'));

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})