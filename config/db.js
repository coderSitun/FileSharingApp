const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify: true});
    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database Connected...');
    }).catch(err => {
        console.log('Connection failed!');
    });
}