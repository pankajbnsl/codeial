const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "error connection to mondodb"));

db.once('open',function(){
    console.log('connected to database::Mongodb');
});

module.exports = db;