const mongoose = require('mongoose');
const config = require('./config.js');

// Connects to the mongoDB database using the mongoDB URI
mongoose.connect(config.db, { useMongoClient: true }, function(){
    console.log('mongodb connected');
});

const db = mongoose.connection;

module.exports = db;
