const mongoose = require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('error', console.log.bind(console, "error connection to mondodb"));

db.once('open',function(){
    console.log('connected to database::Mongodb');
});

module.exports = db;