require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected Successfully'))
    .catch((err) => console.error('Not Connected'));
}

module.exports = connectDB;